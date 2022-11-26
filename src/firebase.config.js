// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJzEdXika3nnlpQ8q6qiyiG5DJTZ0Q2mo",
  authDomain: "housingmarketplace2.firebaseapp.com",
  projectId: "housingmarketplace2",
  storageBucket: "housingmarketplace2.appspot.com",
  messagingSenderId: "125287716739",
  appId: "1:125287716739:web:cd9345856ae96c7a8288b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()