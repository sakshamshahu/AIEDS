// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnQueushSwnzavfnmAfFQqFmh1juZtTA8",
  authDomain: "ai-eds.firebaseapp.com",
  projectId: "ai-eds",
  storageBucket: "ai-eds.appspot.com",
  messagingSenderId: "482846036267",
  appId: "1:482846036267:web:57133dbbfb003c8f6f756e",
  measurementId: "G-XFKM3RQN11"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth  