// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmQUtBQj0wy4kaASchj2pOTSyt_hIKEaY",
    authDomain: "aayojan-df14b.firebaseapp.com",
    projectId: "aayojan-df14b",
    storageBucket: "aayojan-df14b.appspot.com",
    messagingSenderId: "882157703129",
    appId: "1:882157703129:web:3634f6d97d982ea60453c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
