import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as registerServiceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker.register();
