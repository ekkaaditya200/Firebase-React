// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCof9nbhAQ2ldwaszhUwGY9xWR6buB2yvU",
  authDomain: "fir-react-e47cd.firebaseapp.com",
  projectId: "fir-react-e47cd",
  storageBucket: "fir-react-e47cd.appspot.com",
  messagingSenderId: "76121599088",
  appId: "1:76121599088:web:c54b3ce63fefcf5b0cd8b5",
  measurementId: "G-DH088NWK8F",
  databaseURL:"https://fir-react-e47cd-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);