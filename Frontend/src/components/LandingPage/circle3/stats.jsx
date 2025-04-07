import React from 'react';
import statsstyles from './stats.module.css';

export default function Stats(){
    return(
        <>
            <div className={statsstyles['circle-3-main-stats-images']}>
                <div className={statsstyles['circle-3-main-stats-images-holder']}>
                    <div className={statsstyles['circle-3-main-stats-images-number']}>+12k</div>
                    <h4>Current Users</h4>
                </div>
                <div className={statsstyles['circle-3-main-stats-images-holder']}>
                    <div className={statsstyles['circle-3-main-stats-images-number']}>842</div>
                    <h4>number of components</h4>
                </div>
                <div className={statsstyles['circle-3-main-stats-images-holder']}>
                    <div className={statsstyles['circle-3-main-stats-images-number']}>12</div>
                    <h4>languages supported</h4>
                </div>
                <div className={statsstyles['circle-3-main-stats-images-holder']}>
                    <div className={statsstyles['circle-3-main-stats-images-number']}>515</div>
                    <h4>contributors</h4>
                </div>
            </div>
        </>
    );
}