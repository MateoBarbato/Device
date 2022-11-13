import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjLptAXvmVCFZNAHcSYSZ7L66HAdr1BVw",
  authDomain: "app-bar-9e059.firebaseapp.com",
  projectId: "app-bar-9e059",
  storageBucket: "app-bar-9e059.appspot.com",
  messagingSenderId: "955594507499",
  appId: "1:955594507499:web:0f3413816a549a3e522aae"
};

const app = initializeApp(firebaseConfig);


export default app