// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ9Xk3vTcmi7HPBiOd8iUoCnomBJHKkWs",
  authDomain: "aarav-album.firebaseapp.com",
  projectId: "aarav-album",
  storageBucket: "aarav-album.appspot.com",
  messagingSenderId: "784781687432",
  appId: "1:784781687432:web:48d0773956406d8b4e3d3d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();

export { projectStorage, projectFireStore }