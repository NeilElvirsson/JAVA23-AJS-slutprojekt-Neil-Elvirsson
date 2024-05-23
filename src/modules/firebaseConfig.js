import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBmLZqSH68rkUDx9Y7zzCgBfMluJQtFrXo",
  authDomain: "scrum-board-8de32.firebaseapp.com",
  databaseURL: "https://scrum-board-8de32-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "scrum-board-8de32",
  storageBucket: "scrum-board-8de32.appspot.com",
  messagingSenderId: "482549337124",
  appId: "1:482549337124:web:c26259679869ad11e79cb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };