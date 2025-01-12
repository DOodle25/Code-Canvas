import React from 'react';
import zigzagstyles from './zigzag.module.css';
import Image1 from '../../../assets/landing/maini1.png';
import Image2 from '../../../assets/landing/maini2.png';
import Image3 from '../../../assets/landing/maini3.png';
export default function Zigzag() {
    return (
    <>
        <div className={zigzagstyles['circle-3-main']}>
            <div className={zigzagstyles['circle-3-main-content']}>
                <div className={zigzagstyles['circle-3-main-content-text-top']}>add amazing ui/ux elements</div>
                <h2 className={zigzagstyles['circle-3-main-content-text-middle']}>use pre-build UI elements</h2>
                <p className={zigzagstyles['circle-3-main-content-text-bottom']}>
                    to improve the UI-UX feel of your site and make the pages more attractive and a sight to look at.
                </p>
            </div>
            <div className={zigzagstyles['circle-3-main-content-image-holder']}>
                <img src={Image1} width="350" alt="img-1" />
            </div>
        </div>
        <div className={zigzagstyles['circle-3-main-right']}>
            <div className={zigzagstyles['circle-3-main-content-image-holder']}>
                <img src={Image2} width="380" alt="img-2" />
            </div>
            <div className={zigzagstyles['circle-3-main-content']}>
                <div className={zigzagstyles['circle-3-main-content-text-top']}>efficient elements</div>
                <h2 className={zigzagstyles['circle-3-main-content-text-middle']}>Make your site response quicker</h2>
                <p className={zigzagstyles['circle-3-main-content-text-bottom']}>
                    with carefully written code snippets the memory consumption and site response time will be even less.
                </p>
            </div>
        </div>
        <div className={zigzagstyles['circle-3-main']}>
            <div className={zigzagstyles['circle-3-main-content']}>
                <div className={zigzagstyles['circle-3-main-content-text-top']}>Resoposive elements to save your time</div>
                <h2 className={zigzagstyles['circle-3-main-content-text-middle']}>Use Responsive elements with pre written code</h2>
                <p className={zigzagstyles['circle-3-main-content-text-bottom']}>
                    elements with pre-written codes to make them work responsive with different screen sizes.
                </p>
            </div>
            <div className={zigzagstyles['circle-3-main-content-image-holder']}>
                <img src={Image3} width="410" alt="img-3" />
            </div>
        </div>
    </>
    );
}




