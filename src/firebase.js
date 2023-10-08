import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDDh1OftFr8ktLowLJfG7U7XvwtW6T4hsc",
  authDomain: "ecommerce-af34b.firebaseapp.com",
  projectId: "ecommerce-af34b",
  storageBucket: "ecommerce-af34b.appspot.com",
  messagingSenderId: "11542428529",
  appId: "1:11542428529:web:5450f8f13ddcfbc2cc14d0",
  measurementId: "G-9QRS20Y9YL"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleAuthProvider };


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDDh1OftFr8ktLowLJfG7U7XvwtW6T4hsc",
//   authDomain: "ecommerce-af34b.firebaseapp.com",
//   projectId: "ecommerce-af34b",
//   storageBucket: "ecommerce-af34b.appspot.com",
//   messagingSenderId: "11542428529",
//   appId: "1:11542428529:web:5450f8f13ddcfbc2cc14d0",
//   measurementId: "G-9QRS20Y9YL"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);