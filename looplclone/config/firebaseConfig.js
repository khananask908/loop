// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "loop-503ae.firebaseapp.com",
  projectId: "loop-503ae",
  storageBucket: "loop-503ae.appspot.com",
  messagingSenderId: "61134820750",
  appId: "1:61134820750:web:01bff3b8054c746ccd00df",
  measurementId: "G-B04CSXCFXY",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 export const db=getFirestore(app)
const analytics = getAnalytics(app);



