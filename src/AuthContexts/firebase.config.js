// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVQRh4bF3Ppf-heq3DVs2M92moSAexJOQ",
  authDomain: "travetor-world.firebaseapp.com",
  projectId: "travetor-world",
  storageBucket: "travetor-world.appspot.com",
  messagingSenderId: "912875271192",
  appId: "1:912875271192:web:22bf9acab1ad70131d7f6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;