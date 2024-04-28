import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const fbConfig = import.meta.env;

const firebaseConfig = {
  apiKey: fbConfig.VITE_FIREBASE_API_KEY_DEV,
  authDomain: fbConfig.VITE_FIREBASE_AUTH_DOMAIN_DEV,
  projectId: fbConfig.VITE_FIREBASE_PROJECT_ID_DEV,
  storageBucket: fbConfig.VITE_FIREBASE_STORAGE_BUCKET_DEV,
  messagingSenderId: fbConfig.VITE_FIREBASE_MESSAGING_SENDER_ID_DEV,
  appId: fbConfig.VITE_FIREBASE_APP_ID_DEV,
  measurementId: fbConfig.VITE_FIREBASE_MEASUREMENT_ID_DEV
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
