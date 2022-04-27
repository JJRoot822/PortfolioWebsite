import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationLink.css';

const NavigationLink = props => {
    return (
        <NavLink to={props.path}>{props.children}</NavLink>
    );
};

export default NavigationLink;
