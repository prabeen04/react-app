import { auth, provider } from './firebase';

export const doCreateUserWithEmailAndPassword = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);

export const doSignInWithEmailAndPassword = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

export const doSignInPopup = () =>
    auth.signInWithPopup(provider);

export const doSignOut = () =>
  auth.signOut();
