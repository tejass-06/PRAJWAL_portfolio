'use client';

import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    // Only access localStorage on the client side
    if (typeof window !== 'undefined') {
      return localStorage.getItem('adminToken');
    }
    return null;
  });
  const [admin, setAdmin] = useState(null);

  const login = (newToken, adminData) => {
    setToken(newToken);
    setAdmin(adminData);
    if (typeof window !== 'undefined') {
      localStorage.setItem('adminToken', newToken);
    }
  };

  const logout = () => {
    setToken(null);
    setAdmin(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('adminToken');
    }
  };

  return (
    <AuthContext.Provider value={{ token, admin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
