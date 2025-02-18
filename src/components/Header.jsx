import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="/public/ceilão.grid.png" alt="Logo" />
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact us</a></li>
                </ul>
            </nav>
            <button className="join-button">JOIN US</button>
        </header>
    );
};

export default Header;
