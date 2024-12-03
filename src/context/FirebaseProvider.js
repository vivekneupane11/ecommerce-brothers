import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";

export const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [add, setAdd] = useState(false); //when to add value to current user
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (add) {
        setCurrentUser(user);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, [add]);

  const signup = (email, password) => {
    setAdd(false);
    createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setAdd(true);
    signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setAdd(true);
    signOut(auth);
  };

  const signInWithGoogle = () => {
    setAdd(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const value = {
    currentUser,
    signup,
    login,
    logout,
    signInWithGoogle,
    loading,
  };

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
};
