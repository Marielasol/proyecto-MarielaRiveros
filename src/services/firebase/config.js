import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwXMuEfr6bTjIvGpEBjAChH59j6RNNoFU",
  authDomain: "proyecto-estetica-68210.firebaseapp.com",
  projectId: "proyecto-estetica-68210",
  storageBucket: "proyecto-estetica-68210.firebasestorage.app",
  messagingSenderId: "179656588726",
  appId: "1:179656588726:web:a9fb1e86f0f52bed76d517",
  measurementId: "G-RGEDYQK8SJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore (app);