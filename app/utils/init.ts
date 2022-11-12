// Firebase
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth } from "@firebase/auth";

// Initialize Firebase and its modules 
export const init_firebase = (): void => {

  const firebaseConfig = {
    apiKey: "AIzaSyB5n2m_sJ_vJzgTP_1ZC5JyBVFwnraYMI4",
    authDomain: "epoka-clubs-22.firebaseapp.com",
    projectId: "epoka-clubs-22",
    storageBucket: "epoka-clubs-22.appspot.com",
    messagingSenderId: "662580917187",
    appId: "1:662580917187:web:4abf33c8f8086d4e09c376",
    measurementId: "G-FMJ0FBFF7H"
  };


  const app: FirebaseApp = initializeApp(firebaseConfig);

  getAuth(app);
}

