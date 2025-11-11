import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();
const FAKE_USER = {
  email: 'qwe@mail.ru',
  password: 'qwe',
  name: 'qwe', 
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const login = (email, password) => {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      setUser({ email: FAKE_USER.email, name: FAKE_USER.name });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};