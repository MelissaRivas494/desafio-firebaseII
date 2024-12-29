// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8jkiRS1C7X8z9kpm4UK6oYMXo9R1jgFY",
  authDomain: "desafio-firebase-auth-40612.firebaseapp.com",
  projectId: "desafio-firebase-auth-40612",
  storageBucket: "desafio-firebase-auth-40612.firebasestorage.app",
  messagingSenderId: "211569298914",
  appId: "1:211569298914:web:12fc21d004ac5cef02fdbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };