// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.FB_API_KEY!,
  authDomain: process.env.FB_AUTH_DOMAIN!,
  databaseURL: process.env.FB_DB_URL!,
  projectId: process.env.FB_PROJECT_ID!,
  storageBucket: process.env.FB_STORAGE_BUCKET!,
  messagingSenderId: process.env.FB_MESSAGING_SENDER_ID!,
  appId: process.env.FB_APP_ID!,
  measurementId: process.env.FB_MEASUREMENT_ID!
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export {db}