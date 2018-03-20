import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import createSagaMiddleware from 'redux-saga';
import globalSagas from './Containers/App/sagas';

import globalReducer from './Containers/App/reducer';
import adsListReducer from './Containers/AdsList/reducer';

const sagaMiddleware = createSagaMiddleware();
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ || // eslint-disable-line no-underscore-dangle
  (() => noop => noop);

export default function configureStore(initialState = {}) {
  const middleWares = [
    sagaMiddleware,
  ];

  const enhancers = [
    applyMiddleware(...middleWares),
    devTools(),
  ];

  const appReducer = combineReducers({
    global: globalReducer,
    adsList: adsListReducer,
  });

  const store = createStore(
    appReducer,
    fromJS(initialState),
    compose(...enhancers),
  );

  store.runSaga = sagaMiddleware.run;

  globalSagas().forEach((saga) => {
    sagaMiddleware.run(saga);
  });

  return store;
}
