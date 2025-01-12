// Login.jsx
import React, { useState } from 'react';
import styles from './login.module.css';
import { FaGoogle, FaTimes } from 'react-icons/fa';

const Login = ({ onClose, onSwap, setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid email or password');
      }

      setError('');
      setIsLoggedIn(true);
      const data = await response.json();
      // Handle response logic here
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  const handleGoogleLogin = () => {
    // Logic for Google login integration
    alert('Google login clicked!');
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.loginBox}>
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>
        <h2 className={styles.temptitle}>Login</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className={styles.button}>Login</button>
          <button
            type="button"
            onClick={handleGoogleLogin}
            className={styles.googleButton}
          >
            <FaGoogle className={styles.googleIcon} /> Login with Google
          </button>
        </form>
        <p className={styles.switchText}>
          Don’t have an account?{' '}
          <button className={styles.switchButton} onClick={onSwap}>
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;