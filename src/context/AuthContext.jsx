import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('adminToken'));
  const [admin, setAdmin] = useState(null);

  const login = (newToken, adminData) => {
    setToken(newToken);
    setAdmin(adminData);
    localStorage.setItem('adminToken', newToken);
  };

  const logout = () => {
    setToken(null);
    setAdmin(null);
    localStorage.removeItem('adminToken');
  };

  return (
    <AuthContext.Provider value={{ token, admin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
