import React, { useState } from 'react';
import pricingStyles from './pricing.module.css';

// pricingCard-Functional-Component
const PriceCard = () => {
    // ! SelectPeriod (variable)--> holds the time value(daily / monthly/ yearly)
    // ! setSelectedPeriod (function)--> changes/sets the value
    const [selectedPeriod, setSelectedPeriod] = useState('daily'); 

    const prices = {
        daily: 10,
        monthly: 200,
        yearly: 2000
    };

    const periods = ['daily', 'monthly', 'yearly'];

    return (
        <div className={pricingStyles['price-card']}
            id = "pricing-Container-div"
        >
            <div className={pricingStyles['price-card-header']}
                id = "pricing-card-header-div"
            >
                {periods.map(period => (
                    <button
                        id = "pricing-card-button"
                        key={period}
                        // ! class-1 class-2(only if the daily is selected then it makes the button turn pink)
                        className={`${pricingStyles['nav-button']} ${selectedPeriod === period ? pricingStyles.selected : ''}`}
                        //   ! onlick changes the value
                        onClick={() => setSelectedPeriod(period)}
                    >
                        {period}
                    </button>
                ))}
            </div>
            <div className={pricingStyles['price-card-body']}
                id = "pricing-card-body-div"    
            >
                <h2 id = "pricing-text-small">Pricing</h2>
                <h3 id = "pricing-text-large">{`$${prices[selectedPeriod]} per ${selectedPeriod}`}</h3>
            </div>
        </div>
    );
};

export default PriceCard;