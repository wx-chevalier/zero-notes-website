import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { createHashHistory } from 'history';
import { syncHistoryWithStore } from 'mobx-react-router';

import * as OfflinePluginRuntime from 'offline-plugin/runtime';

// import * as Worker from './services/ts-worker';
// import { createWorker } from './services/create-worker';

import * as allStores from './stores';
import App from './application/App';

// const instance = createWorker(Worker);
// instance.expensive(10000).then((count: number) => {
//   console.log(`Run ${count} loops`);
// });

if (process.env.NODE_ENV === 'production') {
  OfflinePluginRuntime.install();
}

const hashHistory = createHashHistory();
const history = syncHistoryWithStore(hashHistory, allStores.routerStore);

ReactDOM.render(
  <Provider {...allStores}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
