import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import {
    getFirestore,
    addDoc,
    collection,
    doc,
    setDoc,
    getDoc
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBYnZ7kberPUlWiIDrH9vFKcl9nTLHjgGc",
    authDomain: "ecomerce-website-6cf41.firebaseapp.com",
    projectId: "ecomerce-website-6cf41",
    storageBucket: "ecomerce-website-6cf41.appspot.com",
    messagingSenderId: "390641151304",
    appId: "1:390641151304:web:0cb25c7ddbb69be208577d",
    measurementId: "G-S20B3W89C7"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
export {
    app,
    auth,
    db,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    addDoc,
    collection,
    signOut,
    doc,
    setDoc,
    getDoc
}