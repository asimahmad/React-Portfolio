import React from 'react';
import Typed from 'react-typed'

function Header(props) {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h2>Web Developer and Mobile Developer</h2>
                <Typed className="typed-text" 
                strings={["Web Developer", "React Developer", "Node Developer", "Mobile Application Developer"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
            
        </div>
    );
}

export default Header;