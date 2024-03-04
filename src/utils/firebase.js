// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALi8FMut8M2bACim5LLeBWnhpaQ4hjp6w",
  authDomain: "act-landing.firebaseapp.com",
  projectId: "act-landing",
  storageBucket: "act-landing.appspot.com",
  messagingSenderId: "962311789617",
  appId: "1:962311789617:web:a760fd974e253186f3c910",
  measurementId: "G-E7GYLZ7ENL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app)
// export const firestore = app.firestore();
const analytics = getAnalytics(app);


