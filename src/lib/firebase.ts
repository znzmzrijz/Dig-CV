import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDoEvEX-QnnQfGfCdYI6_fJVYu5eZuDeUM",
  authDomain: "cvcv-ad5dc.firebaseapp.com",
  projectId: "cvcv-ad5dc",
  storageBucket: "cvcv-ad5dc.firebasestorage.app",
  messagingSenderId: "241291827993",
  appId: "1:241291827993:web:09f3619c4a2195915e8388",
  measurementId: "G-VQJZ9FHWFZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

export default app;