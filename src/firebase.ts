import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDIS5dpFmXD6qjmH51HrQ_UMmKWtRvKKxc",
    authDomain: "transparenciaseac.firebaseapp.com",
    projectId: "transparenciaseac",
    storageBucket: "transparenciaseac.appspot.com",
    messagingSenderId: "640440931494",
    appId: "1:640440931494:web:81e2d4d8a42d3422a0d067"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };