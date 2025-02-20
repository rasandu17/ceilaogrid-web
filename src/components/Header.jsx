import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Import icons
import './Header.css';
import longLogo from '../images/longllogo.png'; // Import the logo

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="header-container">
                <div className="logo">
                    <img src={longLogo} alt="Ceilao Grid" className="logo-image" />
                </div>

                <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                        <li><a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a></li>
                        <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
                        <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact us</a></li>
                    </ul>
                </nav>

                <button className="join-button">JOIN US</button>

                <button 
                    className="mobile-menu-btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>
        </header>
    );
};

export default Header;
