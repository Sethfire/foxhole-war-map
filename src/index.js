import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App.js';
import './style.css';

ReactDOM.render(<App />, document.getElementById('root'));