// firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyBvhLYLwlaDbC6k36FIINZieDv9Xd7tRF8",

  authDomain: "premium-56c27.firebaseapp.com",

  projectId: "premium-56c27",

  storageBucket: "premium-56c27.firebasestorage.app",

  messagingSenderId: "817848109221",

  appId: "1:817848109221:web:2b1e06404a93c35211254c",

  measurementId: "G-BNK9NGMJVJ"
};


// Firebase
const app = initializeApp(firebaseConfig);


// Firestore
const db = getFirestore(app);


// Authentication
const auth = getAuth(app);


export {
  app,
  db,
  auth
};