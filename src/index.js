import { resolve } from 'universal-router'; // eslint-disable-line import/extensions
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import routes from './routes';

const history = createBrowserHistory();
const onLocationChange = (location) => {
  resolve(routes, {
    path: location.pathname,
  }).then(({ component }) => {
    render(component, document.getElementById('root'));
  }).catch(() => {
    // do something with this error
  });
};

history.listen(onLocationChange);
onLocationChange(history);
