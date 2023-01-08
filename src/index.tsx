import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store, history } from 'app/store';

import ErrorBoundary from './containers/errorboundary';
import Loader from 'containers/loader';

import App from './App';

import './index.css';
import { ConnectedRouter } from 'connected-react-router';

const _window = window as any;

_window.oncontextmenu = () => false;
_window.selectstart = () => false;

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Suspense fallback={<Loader />}>
            <App />
          </Suspense>
        </ConnectedRouter>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
