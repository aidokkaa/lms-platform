// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Конфигурация Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAWsxh7GwvcNzVTTkTRvFxdrUEm_SEVUuA",
  authDomain: "lms-app01.firebaseapp.com",
  projectId: "lms-app01",
  storageBucket: "lms-app01.firebasestorage.app",
  messagingSenderId: "214518080763",
  appId: "1:214518080763:web:e1f8c71e1fc57b445cfc5e"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Экспортируем сервисы для использования в компонентах
export const auth = getAuth(app); // для логина/регистрации
export const db = getFirestore(app); // для Firestore (курсы, пользователи)
