import { auth } from './firebase';


export const createUserWithEmailAndPassword = () =>
  auth.createUserWithEmailAndPassword(email, password)

export const signInWithEmailandPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password)

export const signInAnonymously = () =>
  auth.signInAnonymously()

export const signOut = () =>
  auth.signOut()
