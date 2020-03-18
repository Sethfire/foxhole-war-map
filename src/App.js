import React from 'react';

import Header from './components/Header.js';
import WarMap from './components/WarMap.js';
import WarStatus from './components/WarStatus.js';
import WarStats from './components/WarStats.js';
import WarTime from './components/WarTime.js';

class App extends React.Component {

    render() {
        return (
        <div id='container'>
            <div id = 'header'>
                <Header />
            </div>

            <div id='main'>
                <div id='sidebar'>
                    <WarStatus />
					<WarStats />
					<WarTime />
                </div>
                <WarMap />
            </div>
        </div>
        );
    }
}

export default App;