import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () => {
    console.log(email.current.value);
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMsg(message);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web/IN-en-20250407-TRIFECTA-perspective_43f6a235-9f3d-47ef-87e0-46185ab6a7e0_large.jpg"
          alt="logo-login"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
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
