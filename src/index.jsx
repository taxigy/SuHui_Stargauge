import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { resolve } from 'universal-router'; // eslint-disable-line import/extensions
import { createBrowserHistory } from 'history';
import routes from './routes';
import state from './state';
import {
  reset,
} from './state/selected';

const rootElement = document.getElementById('root');
const history = createBrowserHistory();
const onLocationChange = (location) => {
  const path = location.pathname;

  resolve(routes, {
    path,
    state,
    history,
  }).then(({ component }) => {
    render((
      <Provider
        store={state}
      >
        {component}
      </Provider>
    ), rootElement);
  }).catch((e) => {
    rootElement.innerText = e;
  });
};

history.listen(onLocationChange);
onLocationChange(history.location);
document.addEventListener('keyup', (event) => {
  if (event.key === 'Escape' && history.location.pathname !== '/') {
    history.push('/');
    state.dispatch(reset());
  }
});
