import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import * as createSagaMiddleware from 'redux-saga';
import App from './components/App';
import rootReducer from './reducers';
import rootSaga from './sagas';

// const store = createStore(rootReducer);
const composeEnhancers = (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

// 使用saga
const sagaMiddleware = createSagaMiddleware.default();

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(sagaMiddleware)
));
sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)