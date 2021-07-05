import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer, { rootSaga } from './modules';
import createSagaMiddleware from 'redux-saga';
import { tempSetUser, check } from './modules/user';

const sagaMiddlaWare = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddlaWare)),
);

const loadUser = () => {
  try {
    const user = localStorage.getItem('user');
    if (!user) return;

    store.dispatch(tempSetUser(user));
    store.dispatch(check());
  } catch (e) {
    console.log(e);
  }
};

sagaMiddlaWare.run(rootSaga);
loadUser(); // run함수 이후에 처리되어야 한다

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
