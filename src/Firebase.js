import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDqJSnZNRT3-RpFic7J9l59n2tWjerS0hQ",
    authDomain: "whatsapp-clone-34677.firebaseapp.com",
    projectId: "whatsapp-clone-34677",
    storageBucket: "whatsapp-clone-34677.appspot.com",
    messagingSenderId: "68943297322",
    appId: "1:68943297322:web:b395bf8c50634a5786fc53",
    measurementId: "G-FLGBEN86CD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth , provider };
  export default db;