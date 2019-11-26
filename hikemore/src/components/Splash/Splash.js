import React from 'react';
import './Splash.css';
import Button from 'react-bootstrap/Button';

const splash = (props) => {
    return (
        <div className="home-container">
            <div className="home-contents">
                <h1 id="site-name">HikeMore</h1>
                <p className="tagline">Track your hikes. Reach your peaks.</p>
                <Button size="lg" id="btnStart" onClick={props.clicked}>Get Started</Button>
            </div>
        </div>
       
    );
}

export default splash;