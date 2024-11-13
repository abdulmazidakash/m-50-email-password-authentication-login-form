// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


//do not share config in public 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHnDja_hLTPpHypRD-LMxRlQWq2aADekU",
  authDomain: "email-password-auth-24796.firebaseapp.com",
  projectId: "email-password-auth-24796",
  storageBucket: "email-password-auth-24796.firebasestorage.app",
  messagingSenderId: "149335311978",
  appId: "1:149335311978:web:ee0c7eb0fb7afdd3072c13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);