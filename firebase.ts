import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyB8WRG7TB-S6cQRUHtmRIBG2wutSqZu4PQ',
  authDomain: 'mkssistema-706df.firebaseapp.com',
  projectId: 'mkssistema-706df',
  storageBucket: 'mkssistema-706df.appspot.com',
  messagingSenderId: '350929328153',
  appId: '1:350929328153:web:df4237f1cdf80cd353b288',
  measurementId: 'G-DB6JF0S5FG'
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
