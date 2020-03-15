import React from "react";
 
class Header extends React.Component{
    render() {
        return (
            <div className='header'>
                <img src="https://raw.githubusercontent.com/the-fellowship-of-the-warapi/Assets/master/Map%20Icons/Production/MapIconManufacturing.png" 
                width='36' height='36' id='headerImage'/>
                <p className='headerText'> Foxhole War Map Project - Version 3 </p>
            </div>
        );
    }
}

export default Header;