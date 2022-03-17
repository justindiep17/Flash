import { addDoc, serverTimestamp } from "firebase/firestore";
import { decks } from "./firebase/firebaseSetup";

async function createDeck(title, uid) {
  console.log(uid);
  if (uid) {
    const docRef = await addDoc(decks, {
      title: title,
      cards: [],
      uid: uid,
      createdAt: serverTimestamp(),
    });
    return docRef;
  } else {
    console.error("User not logged in");
    return null;
  }
}

export { createDeck };
