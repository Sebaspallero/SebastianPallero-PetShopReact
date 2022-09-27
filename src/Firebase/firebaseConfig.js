import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsXhwyGAyStEmWSq9pTA3tOWpCERVJXfg",
  authDomain: "react-patitas.firebaseapp.com",
  projectId: "react-patitas",
  storageBucket: "react-patitas.appspot.com",
  messagingSenderId: "103840979356",
  appId: "1:103840979356:web:31e6219b5416b63bd55059"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)