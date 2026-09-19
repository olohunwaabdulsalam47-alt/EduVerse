import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBu37fV7AVatgXsA9YVbJQHELEMeCAfBhA",
  authDomain: "eduverse-a1d66.firebaseapp.com",
  projectId: "eduverse-a1d66",
  storageBucket: "eduverse-a1d66.firebasestorage.app",
  messagingSenderId: "657029326378",
  appId: "1:657029326378:web:662a4302b2a6f8af5e0553",
  measurementId: "G-RT2GEEH44T"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export default app;
