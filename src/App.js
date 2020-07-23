import React from 'react';

import Header from './components/Header.js';
import WarMap from './components/map/WarMap.js';
import MapLegend from './components/MapLegend.js';
import WarStatus from './components/WarStatus.js';
import WarStats from './components/WarStats.js';
import WarTime from './components/WarTime.js';
import WarLogs from './components/WarLogs.js';
import Attributions from './components/Attributions.js';

class App extends React.Component {

    render() {
        return (
        <div id='app'>
            <Header />
            <div id='main'>
                <div id='sidebar'>
                    <WarStatus />
					<WarStats />
					<WarTime />
                </div>
                <div id='main2'>
                    <div id='main3'>
                        <WarMap />
					    <MapLegend />
                    </div>
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