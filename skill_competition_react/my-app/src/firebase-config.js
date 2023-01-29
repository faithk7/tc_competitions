// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUXfGKD0hI9Kd6TX-EzgMRnNCEYnvS4OI",
  authDomain: "react-firebase-app-6af46.firebaseapp.com",
  projectId: "react-firebase-app-6af46",
  storageBucket: "react-firebase-app-6af46.appspot.com",
  messagingSenderId: "1009278256144",
  appId: "1:1009278256144:web:4fbbbcf732b37329ae3695",
  measurementId: "G-RK8V6LEEPL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };