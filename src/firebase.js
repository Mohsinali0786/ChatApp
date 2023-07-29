// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTixNMnot4GoxbpCY67AWwkZn_ymoulWo",
  authDomain: "newchatapp-caa2d.firebaseapp.com",
  projectId: "newchatapp-caa2d",
  storageBucket: "newchatapp-caa2d.appspot.com",
  messagingSenderId: "1071301992968",
  appId: "1:1071301992968:web:1a1fcecfaf7416ddbb27bd",
  measurementId: "G-2R021F7LBV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();



