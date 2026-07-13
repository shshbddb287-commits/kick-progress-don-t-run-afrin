// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE3RWpTU5uaKtppT3_jhWCxfvFXLXqAs0",
  authDomain: "kurdoafrin-53d31.firebaseapp.com",
  projectId: "kurdoafrin-53d31",
  storageBucket: "kurdoafrin-53d31.firebasestorage.app",
  messagingSenderId: "184230746586",
  appId: "1:184230746586:web:dd04b9d84864bb2d1148e3",
  measurementId: "G-0YMEQLCMHF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
