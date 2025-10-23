
// Import the functions you need from the SDKs you need 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMmHAcGz56JIS-x4PeKt1YR9RscxPPyJM",
  authDomain: "ph-web-assignment-09.firebaseapp.com",
  projectId: "ph-web-assignment-09",
  storageBucket: "ph-web-assignment-09.firebasestorage.app",
  messagingSenderId: "392289493861",
  appId: "1:392289493861:web:4b800688690db45df9778c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);