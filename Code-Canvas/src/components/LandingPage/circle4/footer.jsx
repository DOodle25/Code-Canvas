import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <div className={styles['circle-4-footer']} id="circle-4-footer">
            <div className={styles['circle-4-footer-holder']}>
                <div className={styles['circle-4-footer-links']}>
                    <a href="#" className={styles['circle-4-footer-link']}>Email</a>
                    <a href="#" className={styles['circle-4-footer-link']}>Instagram</a>
                    <a href="#" className={styles['circle-4-footer-link']}>Facebook</a>
                    <a href="#" className={styles['circle-4-footer-link']}>Twitter</a>
                    <a href="#" className={styles['circle-4-footer-link']}>Some Kind of License Info</a>
                    <a href="#" className={styles['circle-4-footer-link']}>Dipen</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
