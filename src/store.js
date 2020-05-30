import { createStore, applyMiddleware, compose } from 'redux';
import { createLogicMiddleware } from 'redux-logic';

import { rootReducer } from './reducers';
import { arrLogic } from './logic';

const initialState = {};

const deps = {};

const logicMiddleware = createLogicMiddleware(arrLogic, deps);

const middleware = applyMiddleware(
  logicMiddleware
);

export const store = createStore(rootReducer, initialState, compose(
  middleware,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
