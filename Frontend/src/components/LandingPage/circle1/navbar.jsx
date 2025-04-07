import React, { useEffect } from 'react';
import CodeCanvasLogo from '../../../assets/landing/codecanvaslogo.png';
import DropDown from '../../../assets/landing/dropdown.svg';
import navbarstyles from './navbar.module.css';

export default function Navbar() {
    useEffect(() => {
        const dropLinkImg = document.getElementById('drop-link-img');
        const dropdownMenuDiv = document.getElementById('circle-1-nav-dropdown-menu-div');

        const handleDropdownToggle = (event) => {
            event.preventDefault();
            const property = dropdownMenuDiv.style.display;
            if (property === 'none' || property === '') {
                dropdownMenuDiv.style.display = 'block';
            } else {
                dropdownMenuDiv.style.display = 'none';
            }
        };

        dropLinkImg.addEventListener('click', handleDropdownToggle);

        return () => {
            dropLinkImg.removeEventListener('click', handleDropdownToggle);
        };
    }, []);

    return (
        <div className={navbarstyles['circle-1-content']}>
            <div className={navbarstyles['circle-1-nav']}>
                <img src={CodeCanvasLogo} alt="Loading..." />
                <div className={navbarstyles['circle-1-nav-menu']}>
                    <nav className={navbarstyles['circle-1-nav-menu-options']}>
                        <a href="#" className={navbarstyles['about']} id="about">About</a>
                        <a href="#" className={navbarstyles['Dashboard']} id="Dashboard">Dashboard</a>
                        <a href="#" className={navbarstyles['components']} id="components">Components</a>
                        <a href="#" className={navbarstyles['pricing']} id="pricing">Pricing</a>
                    </nav>
                    <div className={navbarstyles['circle-1-nav-menu-button']} id="circle-1-nav-menu-button-div">
                        <div className={navbarstyles['circle-1-nav-menu-button-logo']}>
                            <img src={DropDown} alt="D" style={{ width: '14px' }} id="drop-link-img" />
                            <div className={navbarstyles['circle-1-nav-dropdown-menu']} id="circle-1-nav-dropdown-menu-div" style={{ display: 'none' }}>
                                <a href="#" className={navbarstyles['about2']}>About</a>
                                <a href="#" className={navbarstyles['Dashboard2']}>Dashboard</a>
                                <a href="#" className={navbarstyles['components2']}>Components</a>
                                <a href="#" className={navbarstyles['pricing2']}>Pricing</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
