import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAkryqkH5hQInLXRM2B2GfNdO6mcsneViw",
    authDomain: "discord-163e5.firebaseapp.com",
    projectId: "discord-163e5",
    storageBucket: "discord-163e5.appspot.com",
    messagingSenderId: "808779148838",
    appId: "1:808779148838:web:ac580b5c03c4683e7bc0e7"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore(app);
  
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, db, provider};