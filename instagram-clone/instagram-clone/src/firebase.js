import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDJzd5orVpdv3BQ1truHeiCOd2Px2r9gjQ",
  authDomain: "instagram-clone-23206.firebaseapp.com",
  databaseURL: "https://instagram-clone-23206.firebaseio.com",
  projectId: "instagram-clone-23206",
  storageBucket: "instagram-clone-23206.appspot.com",
  messagingSenderId: "881005133347",
  appId: "1:881005133347:web:158fe6f71421f70ef27b96",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
