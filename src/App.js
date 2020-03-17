import React from 'react';

import Header from './components/Header.js';
import WarMap from './components/WarMap.js';
import WarStatus from './components/WarStatus.js';
import WarTime from './components/WarTime.js';

class App extends React.Component {

    render() {
        return (
        <div id='container'>
            <div id = 'header'>
                <Header />
            </div>

            <div id='body'>
                <div id='sidebar'>
                    <WarStatus />
                </div>
                <WarMap />
            </div>

            <div id='footer'>
                <WarTime />
            </div>
        </div>
        );
    }
}

export default App;