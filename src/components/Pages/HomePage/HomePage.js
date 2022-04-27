import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from '../../Navigation/NavigationBar/NavigationBar';

const HomePage = () => {
    return (
        <React.Fragment>
            <NavigationBar />
            
            <h1>Home Page</h1>
        </React.Fragment>
    );
};

export default HomePage;
