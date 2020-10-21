import React from 'react';

import WarMap from './components/map/WarMap.js';

class App extends React.Component {

    render() {
        return (
            <div id='app'>
                <WarMap />
            </div>
        );
    }
}

export default App;