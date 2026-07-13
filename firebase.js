import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "ضع apiKey هنا",
  authDomain: "kurdoafrin-53d31.firebaseapp.com",
  projectId: "kurdoafrin-53d31",
  storageBucket: "kurdoafrin-53d31.firebasestorage.app",
  messagingSenderId: "184230746586",
  appId: "1:184230746586:web:dd04b9d84864bb2d1148e3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
