import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBhkeOcv1209Cif5xu0263kWj2-32eXRe8",
    authDomain: "healthyweb-d325f.firebaseapp.com",
    projectId: "healthyweb-d325f",
    storageBucket: "healthyweb-d325f.appspot.com",
    messagingSenderId: "69905489403",
    appId: "1:69905489403:web:fbecd0186ed861f4943f5e",
    measurementId: "G-8W0VTHD19X"
  };
  
const app = initializeApp(firebaseConfig);

export const db = getFirestore()