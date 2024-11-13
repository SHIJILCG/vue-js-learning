// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUD91R7U05sPXSh5Z8fg94EHvluoOUBxA",
  authDomain: "fir-auth-7e269.firebaseapp.com",
  projectId: "fir-auth-7e269",
  storageBucket: "fir-auth-7e269.firebasestorage.app",
  messagingSenderId: "852922925224",
  appId: "1:852922925224:web:4264a05272acf345fa029d",
  measurementId: "G-Y35MSYGW9W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };
