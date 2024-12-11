import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6OGp3tJt6_8FKgbUbYAcZkMo0UgQOzmk",
  authDomain: "brothers-repair-ce7ad.firebaseapp.com",
  projectId: "brothers-repair-ce7ad",
  storageBucket: "brothers-repair-ce7ad.firebasestorage.app",
  messagingSenderId: "484381980891",
  appId: "1:484381980891:web:cbdcfa328726c42468f4fe",
  measurementId: "G-4LG956KVDR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const fireDB = getFirestore(app);
export const auth = getAuth(app);
