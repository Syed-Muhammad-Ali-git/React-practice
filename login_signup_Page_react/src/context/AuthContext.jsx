import React, { useState, useEffect } from 'react';
import { AuthContext } from './authUtils';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setUser(storedUser);
      return { success: true };
    }
    return { success: false, message: 'Invalid email or password' };
  };

  const register = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
      return { success: true, message: 'Already registered, logging in' };
    } else {
      const newUser = { email, password };
      localStorage.setItem('user', JSON.stringify(newUser));
      setUser(newUser);
      return { success: true, message: 'Registration successful' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
