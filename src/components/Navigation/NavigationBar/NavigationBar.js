import React from 'react';
import NavigationLink from '../NavigationLink/NavigationLink';
import './NavigationBar.css';

const NavigationBar = props => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavigationLink path="/">Home</NavigationLink>
                    </li>
                    <li>
                        <NavigationLink path="/videos">Tutorials</NavigationLink>
                    </li>
                    <li>
                        <NavigationLink path="/contact">Contact</NavigationLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default NavigationBar;
