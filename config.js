// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH9hH-UltUv4HYI9cjsEPO7VVr-cqJfxw",
  authDomain: "natjecanje-25f60.firebaseapp.com",
  projectId: "natjecanje-25f60",
  storageBucket: "natjecanje-25f60.appspot.com",
  messagingSenderId: "502153006616",
  appId: "1:502153006616:web:e065ea3d3fc0c53accbd6d",
  measurementId: "G-M57C9J97EM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);