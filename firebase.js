import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyCXTHBbPWJHNCOzS1M8teYMeyxXoHNKlbo",
    authDomain: "signal-clone-yt-build-d93a0.firebaseapp.com",
    projectId: "signal-clone-yt-build-d93a0",
    storageBucket: "signal-clone-yt-build-d93a0.appspot.com",
    messagingSenderId: "255691927082",
    appId: "1:255691927082:web:f9493561b138391f5c9d53"
  };
  
  let app;

  if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig)
  }
  else
  {
    app = firebase.app()
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export {db,auth};