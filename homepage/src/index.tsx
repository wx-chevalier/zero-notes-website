import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import * as Worker from './services/ts-worker';
import { createWorker } from './services/create-worker';

import App from './application/App';

const instance = createWorker(Worker);
instance.expensive(10000).then((count: number) => {
  console.log(`Run ${count} loops`);
});

if (process.env.NODE_ENV === 'production') {
  OfflinePluginRuntime.install();
}

ReactDOM.render(<App />, document.getElementById('root'));
