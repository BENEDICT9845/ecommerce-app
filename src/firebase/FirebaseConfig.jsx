// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCylfRCgj9Fpnc1dtEQ2wouu-lUWW3ecXU",
  authDomain: "ecom-app-32c6f.firebaseapp.com",
  projectId: "ecom-app-32c6f",
  storageBucket: "ecom-app-32c6f.appspot.com",
  messagingSenderId: "853499374898",
  appId: "1:853499374898:web:7bfc04e7e58f3f7b11fb2b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
