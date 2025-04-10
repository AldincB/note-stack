import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export const saveNote = (noteId, content) => {
  return db.collection("notes").doc(noteId).set({
    content,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  });
};

export const getNote = (noteId) => {
  return db.collection("notes").doc(noteId).get();
};
