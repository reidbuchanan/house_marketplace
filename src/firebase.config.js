// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhPZKUvqp9jKrN-Gbo3dJKc8__A28QjjA",
  authDomain: "house-marketplace-app-1206b.firebaseapp.com",
  projectId: "house-marketplace-app-1206b",
  storageBucket: "house-marketplace-app-1206b.appspot.com",
  messagingSenderId: "987120952771",
  appId: "1:987120952771:web:30318b3546a278aa6e4976",
  measurementId: "G-LFHJH07679",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
