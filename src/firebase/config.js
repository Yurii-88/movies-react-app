import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: 'AIzaSyDa51IZ1PRaNb3xmIxfK8H_mBgUQTVndpg',
  authDomain: 'movies-react-app-422a0.firebaseapp.com',
  projectId: 'movies-react-app-422a0',
  storageBucket: 'movies-react-app-422a0.firebasestorage.app',
  messagingSenderId: '484363490595',
  appId: '1:484363490595:web:cf6cc3c5863da9973a2896',
};

const app = initializeApp(firebaseConfig);

export default app;
