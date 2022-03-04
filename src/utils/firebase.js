// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjlcvPZwYS4cDyd5bVBXMfGfaWA0p6KcU",
    authDomain: "proyecto-react-4fcfb.firebaseapp.com",
    projectId: "proyecto-react-4fcfb",
    storageBucket: "proyecto-react-4fcfb.appspot.com",
    messagingSenderId: "378523124324",
    appId: "1:378523124324:web:7017debc38ebb3be045571"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db; 