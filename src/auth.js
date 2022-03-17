import { createContext, useContext } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  getAdditionalUserInfo,
} from "firebase/auth";
import { auth } from "./config/firebase/firebaseSetup";

const AuthContext = createContext(null);

function useAuthStatus() {
  return useContext(AuthContext);
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

export { AuthContext, useAuthStatus, loginUser, logoutUser };
