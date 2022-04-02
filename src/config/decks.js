import { addDoc, serverTimestamp, doc, deleteDoc } from "firebase/firestore";
import { decks, db } from "./firebase/firebaseSetup";

async function createDeck(title, uid) {
  if (uid) {
    const docRef = await addDoc(decks, {
      title: title,
      cards: [],
      uid: uid,
      createdAt: serverTimestamp(),
      lastModified: serverTimestamp(),
      description: "",
    });
    return docRef.id;
  } else {
    console.error("User not logged in");
    return null;
  }
}

async function deleteDeck(id) {
  const response = await deleteDoc(getDeckRef(id));
  return response;
}

function getDeckRef(id) {
  return doc(db, "decks", id);
}

export { createDeck, getDeckRef, deleteDeck };
