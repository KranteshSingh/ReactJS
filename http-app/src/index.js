import React from 'react';
import * as Sentry from '@sentry/browser';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import logger from './services/logService';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

logger.init();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
