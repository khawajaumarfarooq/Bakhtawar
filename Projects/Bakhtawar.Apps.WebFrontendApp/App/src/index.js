import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components/App';
// import { register as registerServiceWorker } from './services/service-worker';

import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<App/>, document.getElementById('app'));

// Uncomment the line above that imports the registerServiceWorker function
// and the line below to register the generated service worker.
// By default create-react-app includes a service worker to improve the
// performance of the application by caching static assets. This service
// worker can interfere with the Identity UI, so it is
// disabled by default when Identity is being used.
//
// registerServiceWorker();
