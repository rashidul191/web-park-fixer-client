// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOzL4TE_vswQGO-VMPh4m0BFbOtwx3PZA",
  authDomain: "park-fixer.firebaseapp.com",
  projectId: "park-fixer",
  storageBucket: "park-fixer.appspot.com",
  messagingSenderId: "22451182359",
  appId: "1:22451182359:web:50ec4a1604e0af7b157552",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
