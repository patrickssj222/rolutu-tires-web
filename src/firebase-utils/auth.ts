import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, UserCredential } from 'firebase/auth';

type FirebaseSignUpParams = (
  email: string,
  password: string
) => Promise<UserCredential>;

export const firebaseSignUp: FirebaseSignUpParams = (email, password) => {
  return createUserWithEmailAndPassword(getAuth(), email, password)
}

type FirebaseSignInParams = (
  email: string,
  password: string,
) => Promise<UserCredential>;

export const firebaseSignIn: FirebaseSignInParams = (email, password) => {
  return signInWithEmailAndPassword(getAuth(), email, password);
}

export const firebaseSignOut = () => {
  return signOut(getAuth());
}