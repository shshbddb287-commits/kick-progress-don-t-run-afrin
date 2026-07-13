import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCE3RWpTU5uaKtppT3_jhWCxfvFXLXqAs0",
  authDomain: "kurdoafrin-53d31.firebaseapp.com",
  projectId: "kurdoafrin-53d31",
  storageBucket: "kurdoafrin-53d31.firebasestorage.app",
  messagingSenderId: "184230746586",
  appId: "1:184230746586:web:dd04b9d84864bb2d1148e3",
  measurementId: "G-0YMEQLCMHF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// إنشاء حساب
if (window.location.pathname.includes("register.html")) {
  const email = document.querySelector('input[type="email"]');
  const password = document.querySelector('input[type="password"]');
  const btn = document.querySelector(".register");

  btn.addEventListener("click", async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email.value, password.value);
      alert("تم إنشاء الحساب بنجاح");
      window.location.href = "login.html";
    } catch (error) {
      alert(error.message);
    }
  });
}

// تسجيل الدخول
if (window.location.pathname.includes("login.html")) {
  const email = document.querySelector('input[type="email"]');
  const password = document.querySelector('input[type="password"]');
  const btn = document.querySelector(".login");

  btn.addEventListener("click", async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
      alert("تم تسجيل الدخول");
      window.location.href = "home.html";
    } catch (error) {
      alert(error.message);
    }
  });
}
