import { resolve } from 'universal-router'; // eslint-disable-line import/extensions
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import routes from './routes';

window.routes = routes;
window.resolve = resolve;

const history = createBrowserHistory();
window.his = history;
const onLocationChange = ({ location }) => {
  resolve(routes, {
    path: location.pathname,
  }).then(({ component }) => {
    // console.log(component)
    render(component, document.getElementById('root'));
  }).catch((e) => {
    console.error(e);
    // do something with this error
  });
};

history.listen(onLocationChange);
onLocationChange(history);
