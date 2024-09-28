import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth"; // Ensure you import from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRRUYw8EYiptqgC9k0LLy5C1Zj8fFK1M0",
  authDomain: "fir-chat-7aeca.firebaseapp.com",
  projectId: "fir-chat-7aeca",
  storageBucket: "fir-chat-7aeca.appspot.com",
  messagingSenderId: "304620413827",
  appId: "1:304620413827:web:c2bf643afde31f3f410cb6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with persistence
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage), // Pass AsyncStorage here
});

// Initialize Firestore
export const db = getFirestore(app);

// References to collections
export const usersRef = collection(db, "users");
export const roomRef = collection(db, "rooms");
/* 


// Import the functions you need from the SDKs you need
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth"; // Ensure you import from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRRUYw8EYiptqgC9k0LLy5C1Zj8fFK1M0",
  authDomain: "fir-chat-7aeca.firebaseapp.com",
  projectId: "fir-chat-7aeca",
  storageBucket: "fir-chat-7aeca.appspot.com",
  messagingSenderId: "304620413827",
  appId: "1:304620413827:web:c2bf643afde31f3f410cb6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with persistence
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage), // Pass AsyncStorage here
});

// Initialize Firestore
export const db = getFirestore(app);

// References to collections
export const usersRef = collection(db, "users");
export const roomRef = collection(db, "rooms");
*/
