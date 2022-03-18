import { addDoc, serverTimestamp } from "firebase/firestore";
import { decks } from "./firebase/firebaseSetup";

async function createDeck(title, uid) {
  if (uid) {
    const docRef = await addDoc(decks, {
      title: title,
      cards: [],
      uid: uid,
      createdAt: serverTimestamp(),
      lastModified: serverTimestamp(),
    });
    return docRef.id;
  } else {
    console.error("User not logged in");
    return null;
  }
}

export { createDeck };
