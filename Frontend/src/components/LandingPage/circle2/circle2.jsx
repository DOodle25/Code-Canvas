import React from 'react';
import circle2styles from "./circle2.module.css"
import Mainimage from '../../../assets/landing/main.png';
export default function Circle2() {
    return (
        <div className={circle2styles['circle-2']}>
            <div className={circle2styles['circle-2-main']}>
                <div className={circle2styles['circle-2-main-content']}>
                    <div className={circle2styles['circle-2-main-content-up']}>Build Your Own website</div>
                    <h2 className={circle2styles['circle-2-main-content-down']}>Use our Snippets / Elements to <br /> boost your pages</h2>
                </div>
                <div className={circle2styles['circle-2-main-content-image']}>
                    <img src={Mainimage} alt="loading..." width="1050" />
                </div>
            </div>
        </div>
    );
}


