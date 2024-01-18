import { firebaseAuth } from "./firebase";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const auth = getAuth();

export const AUTH_API = {
  signIn: (email: string, password: string) =>
    signInWithEmailAndPassword(firebaseAuth, email, password),
  signOut: () => signOut(auth),
};
