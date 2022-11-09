import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from './firebase.config';
import { GoogleAuthProvider } from 'firebase/auth'



export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const auth = getAuth(app)
  const googleProvider = new GoogleAuthProvider();

  const handleRegister = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const handleLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const handleSignOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  const loginWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      unsubscribe();
    }

  }, [])

  const handleUpdateProfile = (userDetails) => {
    console.log(userDetails);
    return updateProfile(auth.currentUser, {
      displayName: userDetails.name,
      photoURL: userDetails.photoURL
    })
  }


  const authInfo = {
    handleRegister,
    handleLogin,
    user,
    handleSignOut,
    loginWithGoogle,
    loading,
    handleUpdateProfile

  }


  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;