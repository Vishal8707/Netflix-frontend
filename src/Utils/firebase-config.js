
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZTp2daAsSYxy-d9J1CvbIPTeW5vbxxmY",
  authDomain: "react-netflix-clone-f70dc.firebaseapp.com",
  projectId: "react-netflix-clone-f70dc",
  storageBucket: "react-netflix-clone-f70dc.appspot.com",
  messagingSenderId: "782438106976",
  appId: "1:782438106976:web:7006033701148641f9c005",
  measurementId: "G-CEG3QS6KC4"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)