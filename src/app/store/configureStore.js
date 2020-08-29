import {applyMiddleware, createStore, compose} from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

export const configureStore = preloadedState => {
  const middlewares = [thunk];

  const middlewareEnhancer = applyMiddleware(...middlewares);

  const storeEnhancers = [middlewareEnhancer];

  const devToolsEnhnacer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const composedEnhancers = devToolsEnhnacer(...storeEnhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
};
