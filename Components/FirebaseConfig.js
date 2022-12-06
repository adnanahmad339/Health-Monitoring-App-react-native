// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS8lMqJUVd3MhaolJYUOb15sCANh8j1cI",
  authDomain: "pmapp-2d469.firebaseapp.com",
  databaseURL: "https://pmapp-2d469-default-rtdb.firebaseio.com",
  projectId: "pmapp-2d469",
  storageBucket: "pmapp-2d469.appspot.com",
  messagingSenderId: "1083041731878",
  appId: "1:1083041731878:web:c39a55fa368977ae6b1de7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export{db};