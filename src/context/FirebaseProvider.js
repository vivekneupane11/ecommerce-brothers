import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  serverTimestamp,
} from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { auth, fireDB } from "./../firebase/firebase";

export const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [add, setAdd] = useState(false); // When to add value to currentUser
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

  // Authentication functions
  const signup = async (email, password) => {
    setAdd(false);
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const login = async (email, password) => {
    setAdd(true);
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    setAdd(true);
    await signOut(auth);
  };

  const signInWithGoogle = async () => {
    setAdd(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // Order functions
  const placeOrder = async (
    billingDetails,
    cartItems,
    totalAmount,
    paymentMethod
  ) => {
    if (!currentUser)
      throw new Error("User must be logged in to place an order");

    const orderData = {
      userId: currentUser.uid,
      billingDetails,
      items: cartItems,
      totalAmount,
      paymentMethod,
      orderDate: serverTimestamp(),
    };

    const orderRef = await addDoc(collection(fireDB, "orders"), orderData);
    return orderRef.id; // Return the Order ID for further use
  };

  const fetchOrders = async () => {
    if (!currentUser) throw new Error("User must be logged in to fetch orders");

    const ordersQuery = query(
      collection(fireDB, "orders"),
      where("userId", "==", currentUser.uid)
    );
    const querySnapshot = await getDocs(ordersQuery);
    const orders = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return orders;
  };

  const value = {
    currentUser,
    signup,
    login,
    logout,
    signInWithGoogle,
    loading,
    placeOrder, // Expose order functions
    fetchOrders,
  };

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
};
