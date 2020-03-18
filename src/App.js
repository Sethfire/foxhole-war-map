import React from 'react';

import Header from './components/Header.js';
import WarMap from './components/map/WarMap.js';
import WarStatus from './components/WarStatus.js';
import WarStats from './components/WarStats.js';
import WarTime from './components/WarTime.js';
import WarLogs from './components/WarLogs.js';
import Attributions from './components/Attributions.js';

class App extends React.Component {

    render() {
        return (
        <div id='app'>
            <div id = 'header'>
                <Header />
            </div>

            <div id='main'>
                <div id='sidebar'>
                    <WarStatus />
					<WarStats />
					<WarTime />
                </div>
                <div id='main2'>
                    <WarMap />
                    <div id='footer'>
                        <WarLogs />
                        <Attributions />
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default App;