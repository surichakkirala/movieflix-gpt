// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXEjhrKr9WKeeu_VDVAlH2q2hQO_bhQNw",
  authDomain: "movieflixgpt-7b791.firebaseapp.com",
  projectId: "movieflixgpt-7b791",
  storageBucket: "movieflixgpt-7b791.firebasestorage.app",
  messagingSenderId: "589114026957",
  appId: "1:589114026957:web:081a9a6f4b9521690e3284",
  measurementId: "G-1E9CJXMD12",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
