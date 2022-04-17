// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHt5KXgoTyqKZPgITMzYnTBri60irEdCM",
  authDomain: "doctor-chamber-a37bf.firebaseapp.com",
  projectId: "doctor-chamber-a37bf",
  storageBucket: "doctor-chamber-a37bf.appspot.com",
  messagingSenderId: "857911347209",
  appId: "1:857911347209:web:d16f7a49dfc2450ce4d0d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;