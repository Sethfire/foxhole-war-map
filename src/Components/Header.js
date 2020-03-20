import React from "react";
 
class Header extends React.Component{
    render() {
        return (
            <div className='war-box'>
                <img src="https://raw.githubusercontent.com/the-fellowship-of-the-warapi/Assets/master/Map%20Icons/Production/MapIconManufacturing.png" 
                width='36' height='36' id='header-image'/>
                <p id='header-text'><font color='#d67b52'>Foxhole War Map Project by Sethfire & Kastow - Version 3.0.0 [PROTOTYPE - Development Build]</font></p>
            </div>
        );
    }
}

export default Header;