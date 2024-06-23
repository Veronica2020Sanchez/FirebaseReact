// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    // apiKey: "AIzaSyCwneQhKSu5nC2ouHxc_KQgPOOlbbjgfzE",
    // authDomain: "test-7cd09.firebaseapp.com",
    // projectId: "test-7cd09",
    // storageBucket: "test-7cd09.appspot.com",
    // messagingSenderId: "807031825198",
    // appId: "1:807031825198:web:69665c2b11c21ed130d0bf",
    // measurementId: "G-PBNVHM81RJ"
};

export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)

