import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../slices/userSlice";
import { BG_IMAGE, USER_AVATAR } from "../utils/constants";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMsg(message);
    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode === "auth/invalid-credential") {
            setErrorMsg("Invalid Email or Password");
          }
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen object-cover md:w-screen"
          src={BG_IMAGE}
          alt="logo-login"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-3/12 absolute p-12 bg-black my-36 md:mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="text-2xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="p-3 my-4 w-full bg-gray-800"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-3 my-4 w-full bg-gray-800"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-3 my-4 w-full  bg-gray-800"
        />
        <p className="text-red-600">{errorMsg}</p>
        <button
          className="p-3 my-6 cursor-pointer bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex flex-row space-x-1">
          {isSignInForm ? (
            <>
              <p className="py-4">New to Movieflix?</p>
              <p
                className="py-4 cursor-pointer underline"
                onClick={toggleSignInForm}
              >
                Signup Now
              </p>
            </>
          ) : (
            <>
              <p className="py-4">Already Registered?</p>
              <p
                className="py-4 cursor-pointer underline"
                onClick={toggleSignInForm}
              >
                Sign In
              </p>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
