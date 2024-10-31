// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANUZRKVyaJqnkm8EWLYw10Sp6Rm8krXDc",
  authDomain: "proyectfirebase-11bea.firebaseapp.com",
  projectId: "proyectfirebase-11bea",
  storageBucket: "proyectfirebase-11bea.appspot.com",
  messagingSenderId: "111410869972",
  appId: "1:111410869972:web:091e1696bd894d8eafad41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);