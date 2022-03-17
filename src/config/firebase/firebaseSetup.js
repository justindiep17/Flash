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

// db stuff
const users = collection(db, "users");
const decks = collection(db, "decks");

export { auth, db, fn, users, decks };
