import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgl0aYJC9hazvAwGXXWaLypisJetgqsRg",
  authDomain: "fir-1cb47.firebaseapp.com",
  projectId: "fir-1cb47",
  storageBucket: "fir-1cb47.appspot.com",
  messagingSenderId: "719455345785",
  appId: "1:719455345785:web:132fda90ae081161b708a8",
  measurementId: "G-SCYR50NC22",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
