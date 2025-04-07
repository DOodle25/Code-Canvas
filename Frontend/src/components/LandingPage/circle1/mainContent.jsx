import React, { useState } from 'react';
import mainContentStyles from './mainContent.module.css';
import landingMainImage from '../../../assets/landing/landing-main.png';
import Login from '../../loginsignup/login';
import Signup from '../../loginsignup/signup';

export default function MainContent({setIsLoggedIn}) {
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
        <div className={mainContentStyles['circle-1-main-content']}>
            <div className={mainContentStyles['circle-1-main-content-text']}>
                <h1 className={mainContentStyles['circle-1-main-content-text-up']}>Boost your code</h1>
                <h3 className={mainContentStyles['circle-1-main-content-text-down']}>
                    Build your website or <span>web-applications </span> with help of our snippets.
                </h3>
                <a href="#" onClick={handleSignupClick}>Sign up</a>
                <a href="#" onClick={handleLoginClick}>Log in</a>
            </div>
            <img src={landingMainImage} loading="lazy" width="437" alt="" />
            {showLogin && <Login onClose={handleClose} onSwap={handleSwap} setIsLoggedIn={setIsLoggedIn}/>}
            {showSignup && <Signup onClose={handleClose} onSwap={handleSwap} />}
        </div>
    );
}