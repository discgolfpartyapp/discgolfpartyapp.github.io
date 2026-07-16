// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvhBhHFYC3Gw49wL_r8wWso932qyx26RQ",
  authDomain: "disc-golf-party-703d8.firebaseapp.com",
  projectId: "disc-golf-party-703d8",
  storageBucket: "disc-golf-party-703d8.firebasestorage.app",
  messagingSenderId: "427580360451",
  appId: "1:427580360451:web:44dc721c5c9990cc3a8b36",
  measurementId: "G-6ZLTYXCEGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
