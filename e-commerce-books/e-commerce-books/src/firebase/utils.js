import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import { firebaseConfig } from "./config";

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: "select_account" });

//  Check if user is saved/stored in our user collection on Firebase, otherwise we set them up in our collection
export const handleUserProfile = async ({ userAuth, data }) => {
  if (!userAuth) return;

  const { uid } = userAuth;
  const userRef = firestore.doc(`users/${uid}`);

  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const timestamp = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdOn: timestamp,
        ...data,
      });
    } catch (err) {
      console.log(err);
    }
  }
  return userRef;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};
