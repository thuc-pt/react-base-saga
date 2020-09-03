import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import saga from '../sagas';

const composeEnhancers = process.env.NODE_ENV === 'development' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    shouldHotReload: false
  }) : compose

const sagaMiddleware = createSagaMiddleware()

const configStore = () => {
  const middleWares = [thunk, sagaMiddleware];
  const enhancers = [applyMiddleware(...middleWares)];
  const store = createStore(rootReducer, composeEnhancers(...enhancers));
  sagaMiddleware.run(saga);
  return store;
}

export default configStore;
