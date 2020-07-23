import React from "react";
 
class Header extends React.Component{
    render() {
        return (
            <div className='war-box'>
                <img src='/icons/MapIconManufacturing.png' width='36' height='36' id='header-image'/>
                <p id='header-text'><font color='#d67b52'>Foxhole War Map Project by Sethfire & Kastow - Version 3.0.0</font></p>
            </div>
        );
    }
}

export default Header;