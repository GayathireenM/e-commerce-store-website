import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleLoginButton from './GoogleLoginButton';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here (e.g., authenticate user)
    if (username === 'user' && password === 'password') {
      onLogin(true);
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  const handleGoogleLoginSuccess = (isAuthenticated) => {
    onLogin(isAuthenticated);
    navigate('/');
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <GoogleLoginButton onLoginSuccess={handleGoogleLoginSuccess} />
    </div>
  );
};

export default Login;
