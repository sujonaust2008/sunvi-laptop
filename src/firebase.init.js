// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtsem-6KRQbyUcwe7w_Y0sjiRWqNVzIek",
  authDomain: "sunvi-laptop.firebaseapp.com",
  projectId: "sunvi-laptop",
  storageBucket: "sunvi-laptop.appspot.com",
  messagingSenderId: "341522422195",
  appId: "1:341522422195:web:f3e85f25bb3a33a3f153c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;