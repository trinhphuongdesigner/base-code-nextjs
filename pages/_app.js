import { Provider } from 'react-redux';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import rootSagas from '../redux/rootSaga';
import store, { sagaMiddleware } from '../redux/store';

import '../styles/scss/style.scss';

sagaMiddleware.run(rootSagas);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ToastContainer
        limit={3}
        autoClose={2000}
        closeOnClick
        transition={Flip}
      />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
