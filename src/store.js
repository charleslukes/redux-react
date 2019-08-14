import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducer';
import {forbidden} from './middlewares';
import createSagaMiddleware from 'redux-saga';
import apiSaga from './sagas/index';

const initializeSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer, 
  storeEnhancers(applyMiddleware(forbidden, initializeSagaMiddleware))
);

initializeSagaMiddleware.run(apiSaga);
