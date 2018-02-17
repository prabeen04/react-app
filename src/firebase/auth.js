import {
  auth,
  googleProvider,
  facebookProvider
} from './firebase';

export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

export const doSignInGoogle = () =>
  auth.signInWithPopup(googleProvider);

export const doSignInFacebook = () =>
  auth.signInWithPopup(facebookProvider);

export const doSignOut = () =>
  auth.signOut();
