// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmSt1ellYhZSHKWPepQUIcpV2A_2c2y_o",
  authDomain: "tea-store-f1a6a.firebaseapp.com",
  databaseURL: "https://tea-store-f1a6a-default-rtdb.firebaseio.com",
  projectId: "tea-store-f1a6a",
  storageBucket: "tea-store-f1a6a.appspot.com",
  messagingSenderId: "754630079631",
  appId: "1:754630079631:web:da6f6dc56fa427d9ad2cfa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);

export { db, storage };
