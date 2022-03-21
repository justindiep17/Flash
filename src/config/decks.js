import { addDoc, serverTimestamp, doc } from "firebase/firestore";
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

function getDeckRef(id) {
  return doc(db, "decks", id);
}

export { createDeck, getDeckRef };
