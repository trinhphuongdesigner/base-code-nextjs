import { Provider } from 'react-redux';

import rootSagas from '../redux/rootSaga';
import store, { sagaMiddleware } from '../redux/store';

import '../styles/scss/style.scss';

sagaMiddleware.run(rootSagas);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
