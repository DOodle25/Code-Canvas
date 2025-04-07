import React from 'react';
import supportstyles from './support.module.css';
import bookmarkImg from '../../../assets/landing/bookmark.svg';
import creatorImg from '../../../assets/landing/creator.svg';
import supportImg from '../../../assets/landing/support.svg';

export default function Support(){
    return (
        <div className={supportstyles['circle-3-main-support-images']}>
            <div className={supportstyles['circle-3-main-support-images-holder']}>
                <img src={bookmarkImg} alt="i-1" />
                <h4>become a consumer</h4>
                <p>Log-in right now and use many free elements on our site to deploy your own project.</p>
            </div>
            <div className={supportstyles['circle-3-main-support-images-holder']}>
                <img src={creatorImg} alt="i-2" />
                <h4>become a contributor</h4>
                <p>Enable your creativity and create components and share on our site with our users.</p>
            </div>
            <div className={supportstyles['circle-3-main-support-images-holder']}>
                <img src={supportImg} alt="i-3" />
                <h4>support the site</h4>
                <p>Purchase a premium account and support our site to increase our range and tools to give you more facilities.</p>
            </div>
        </div>
    );
};