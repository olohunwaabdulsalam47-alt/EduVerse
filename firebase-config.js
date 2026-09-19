import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-analytics.js";

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
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, db, auth, analytics };
