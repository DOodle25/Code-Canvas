import React, { useState } from 'react';
import styles from './community.module.css';

export default function Community() {
    const [formState, setFormState] = useState({ success: false, fail: false });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission logic
        const isSuccess = Math.random() > 0.5;
        if (isSuccess) {
            setFormState({ success: true, fail: false });
        } else {
            setFormState({ success: false, fail: true });
        }
    };

    return (
        <div className={styles['circle-4-community']}>
            <div className={styles['circle-4-community-holder']}>
                <h2>Get updates from our community</h2>
                <p>Get Emails Regarding this week's popular components</p>
                <div className={`${styles['form-block']} w-form`}>
                    <form className={styles['circle-4-community-form']} onSubmit={handleSubmit}>
                        <input 
                            className={styles['circle-4-community-form-input']} 
                            placeholder="Enter your email" 
                            type="text" 
                            required 
                        />
                        <input 
                            className={styles['circle-4-community-form-button']} 
                            type="submit" 
                        />
                    </form>
                    <div className={styles['circle-4-community-form-success-text']} style={{ display: formState.success ? 'block' : 'none' }}>
                        <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className={styles['circle-4-community-form-fail-text']} style={{ display: formState.fail ? 'block' : 'none' }}>
                        <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
