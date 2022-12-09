import '@babel/polyfill'
import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './frontend/approuter';
// Use For Switch
import 'react-toggle-switch/dist/css/switch.min.css';


ReactDOM.render(<AppRouter/>, document.getElementById('root'));

if (module.hot) { // enables hot module replacement if plugin is installed
 module.hot.accept();
};