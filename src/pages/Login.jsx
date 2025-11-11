import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    const success = login(email, password);
    if (success) {
      navigate('/dashboard', { replace: true }); 
    } else {
      setError('Неверный Email или пароль.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <h2>Вход в аккаунт</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Пароль:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Войти</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;