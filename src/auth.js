import { createContext, useContext } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  getAdditionalUserInfo,
} from "firebase/auth";
import { auth } from "./config/firebase/firebaseSetup";

const authContext = createContext({ user: null, setUser: () => {} });

function useAuthStatus() {
  return useContext(authContext);
}

async function loginUser() {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
  } catch (e) {
    console.error(e);
  }
}

function logoutUser() {
  signOut(auth);
}

export { authContext, useAuthStatus, loginUser, logoutUser };
