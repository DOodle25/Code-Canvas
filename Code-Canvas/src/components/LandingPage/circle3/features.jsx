import React from 'react';
import featuresstyles from './features.module.css';
import mainNext1 from '../../../assets/landing/main-next-1.png';
import mainNext2 from '../../../assets/landing/main-next-2.png';

export default function features(){
    return(
        <>
            <div className={featuresstyles['circle-3-main-features']}>
                <div className={featuresstyles['circle-3-main-features-text']}>
                    <div className={featuresstyles['circle-3-main-features-text-up']}>Device compatibility</div>
                    <h2>Can work on multiple range of devices</h2>
                    <p></p>
                </div>
                <div className={featuresstyles['circle-3-main-features-image']}>
                    <img src={mainNext1} alt="" className={featuresstyles['image-2']} />
                </div>
            </div>
            <div className={featuresstyles['circle-3-main-features']}>
                <div className={featuresstyles['circle-3-main-features-image']}>
                    <img src={mainNext2} alt="" className={featuresstyles['image-2']} />
                </div>
                <div className={featuresstyles['circle-3-main-features-text']}>
                    <div className={featuresstyles['circle-3-main-features-text-up']}>Easy to deploy</div>
                    <h2 className={featuresstyles['circle-3-main-features-text-down']}>Multiple language support</h2>
                    <p>allows you to deploy elements in multiple different languages</p>
                </div>
            </div>
        </>
        );
    }