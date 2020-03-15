import React from 'react';

import Header from './Components/Header.js';
import WarMap from './Components/WarMap.js';
import WarStatus from './Components/WarStatus.js';
import WarTime from './Components/WarTime.js';

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        {/*<WarStatus />*/}
        <WarMap />
        {/*<WarTime />*/}
      </div>
    );
  }
}

export default App;