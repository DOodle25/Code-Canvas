import React, { useState } from 'react';
import styles from './signuplogin.module.css';
import Login from '../../loginsignup/login';
import Signup from '../../loginsignup/signup';

export default function SignupLogin({ setIsLoggedIn }) {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    const handleLoginClick = () => {
        setShowLogin(true);
        setShowSignup(false);
    };

    const handleSignupClick = () => {
        setShowLogin(false);
        setShowSignup(true);
    };

    const handleClose = () => {
        setShowLogin(false);
        setShowSignup(false);
    };

    const handleSwap = () => {
        setShowLogin(!showLogin);
        setShowSignup(!showSignup);
    };
    return (
        <div className={styles['circle-3-signup-login']}>
            <div className={styles['circle-3-signup-login-container']}>
                <h2>You Ready to Join us?</h2>
                <div className={styles['circle-3-signup-login-button']}>
                    <button onClick={handleSignupClick} className={styles['circle-3-signup-button']}>Sign-up</button>
                    <button onClick={handleLoginClick} className={styles['circle-3-login-button']}>Log-in</button>
                </div>
                {showLogin && <Login onClose={handleClose} onSwap={handleSwap} setIsLoggedIn={setIsLoggedIn}/>}
                {showSignup && <Signup onClose={handleClose} onSwap={handleSwap}/>}
            </div>
        </div>
    );
}
