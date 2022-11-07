import React, { createContext } from 'react';
import { getAuth } from 'firebase/auth'
import app from './firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app)

  const authInfo = {}
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;