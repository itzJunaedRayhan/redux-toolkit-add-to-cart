import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCPszhcab6Kp7LO9wtmBe92Ug6BUJ6u1fw",
  authDomain: "technet-redux-toolkit.firebaseapp.com",
  projectId: "technet-redux-toolkit",
  storageBucket: "technet-redux-toolkit.appspot.com",
  messagingSenderId: "249758530082",
  appId: "1:249758530082:web:17229ef40d5afb7e87287b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
