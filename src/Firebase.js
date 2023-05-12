// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAscJnjZWWa-WJv-lhCy7RezD3BswEExJw",
  authDomain: "chat-projecto.firebaseapp.com",
  databaseURL: "https://chat-projecto-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chat-projecto",
  storageBucket: "chat-projecto.appspot.com",
  messagingSenderId: "978862792850",
  appId: "1:978862792850:web:d374abfdf8dd9f69de464b",
  measurementId: "G-B6XQSP5377"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;