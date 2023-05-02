// Import the functions you need from the SDKs you need
import { getDatabase } from "firebase/database";
// Initialize Realtime Database and get a reference to the service
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuPFB4Mbc9zVkypHGFPKrQjqiX3Wdt-B4",
  authDomain: "projecto-36858.firebaseapp.com",
  databaseURL: "https://projecto-36858-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "projecto-36858",
  storageBucket: "projecto-36858.appspot.com",
  messagingSenderId: "799369896689",
  appId: "1:799369896689:web:7ec07fa85bbc61f6d3bf50",
  measurementId: "G-ZJ6VKRRG1G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export default database