// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, onSnapshot, collection, addDoc, getDocs, where, query } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA4EiQCvgk1MHUJbSL6OrhqH5mpWtMgBR4",
    authDomain: "w3schools-d6e5d.firebaseapp.com",
    projectId: "w3schools-d6e5d",
    storageBucket: "w3schools-d6e5d.appspot.com",
    messagingSenderId: "1004500879047",
    appId: "1:1004500879047:web:c39eca79e3b07a29dce0e2",
    measurementId: "G-D9XHH7GFX0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const auth = getAuth();
const db = getFirestore();
const todoRef = collection(db, 'todo')
const userRef = collection(db, 'user')
const eventRef = collection(db, 'events')

export {
    auth,
    db, todoRef,
    onAuthStateChanged,
    signInWithPopup,
    addDoc, getDocs,
    where, query,
    getStorage, ref,
    getDownloadURL,
    eventRef,
    onSnapshot,
    userRef,
    signOut, uploadBytes,
    signInWithEmailAndPassword, createUserWithEmailAndPassword
}