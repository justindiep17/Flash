import firebaseConfig from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { useState } from "react";
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

const db = getFirestore(firebaseApp);
const fn = getFunctions(firebaseApp);

const withIDConverter = {
  toFirestore(data) {
    return data;
  },
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options);
    return {
      id: snapshot.id,
      ...data,
    };
  },
};

// db stuff
const users = collection(db, "users").withConverter(withIDConverter);
const decks = collection(db, "decks").withConverter(withIDConverter);

export { auth, db, fn, users, decks };
