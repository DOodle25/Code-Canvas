// Signup.jsx
import React, { useState } from 'react';
import styles from './signup.module.css';
import { FaGoogle, FaTimes } from 'react-icons/fa';

const Signup = ({ onClose, onSwap }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        throw new Error('Passwords do not match');
      }

      const response = await fetch('http://localhost:3001/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message);
      }

      setError('');
      setSuccessMessage('User signed up successfully');
    } catch (error) {
      setError(error.message);
      setSuccessMessage('');
    }
  };

  const handleGoogleSignup = () => {
    alert('Google signup clicked!');
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.signupBox}>
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>
        <h2 className={styles.temptitle}>Sign Up</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className={styles.input}
            />
          </div>
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
          <div className={styles.inputGroup}>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          {error && <p className={styles.error}>{error}</p>}
          {successMessage && <p className={styles.success}>{successMessage}</p>}
          <button type="submit" className={styles.button}>Sign Up</button>
          <button
            type="button"
            onClick={handleGoogleSignup}
            className={styles.googleButton}
          >
            <FaGoogle className={styles.googleIcon} /> Sign Up with Google
          </button>
        </form>
        <p className={styles.switchText}>
          Already have an account?{' '}
          <button className={styles.switchButton} onClick={onSwap}>
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;