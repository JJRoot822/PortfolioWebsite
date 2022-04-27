import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from '../../Navigation/NavigationBar/NavigationBar';
import NavigationLink from '../../Navigation/NavigationLink/NavigationLink';

const TutorialsPage = () => {
    return (
        <React.Fragment>
            <NavigationBar />
            
            <h1>Tutorials Page</h1>
        </React.Fragment>
    );
};

export default TutorialsPage;
