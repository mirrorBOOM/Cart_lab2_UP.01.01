import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([
    { id: 1, email: 'qwe@gmail.com', password: 'qwe', name: 'qwe' },
  ]);

  const login = (email, password) => {
    const foundUser = users.find(u => u.email === email && u.password === password);
    if (foundUser) {
      setUser(foundUser);
      return { success: true, user: foundUser };
    }
    return { success: false, error: 'Неверный email или пароль' };
  };

  const register = (email, password, name) => {
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      return { success: false, error: 'Пользователь с таким email уже существует' };
    }
    
    const newUser = {
      id: users.length + 1,
      email,
      password,
      name
    };
    
    setUsers(prev => [...prev, newUser]);
    setUser(newUser);
    return { success: true, user: newUser };
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    users,
    login,
    register,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};