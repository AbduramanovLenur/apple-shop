import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCFqU6FaosMibDPu8mD5nSGmT15NTA_R3U",
    authDomain: "vue-auth-shop.firebaseapp.com",
    projectId: "vue-auth-shop",
    storageBucket: "vue-auth-shop.appspot.com",
    messagingSenderId: "744790457064",
    appId: "1:744790457064:web:d6bac80246f3d8b7e5a75d"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };