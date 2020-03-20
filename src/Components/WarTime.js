import React from "react";

class WarTime extends React.Component{
    render() {
        return (
            <div className='war-box' id='war-time'>
                <p id='war-time-header'><font color='#d67b52'>Current Ingame Time</font></p>
                <p id='war-time-day'>Conquest War 0 - Day 0</p>
            </div>
        );
    }
}

export default WarTime;