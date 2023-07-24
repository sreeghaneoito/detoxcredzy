import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {getDefaultMiddleware} from '@reduxjs/toolkit';
import {rootReducer} from './root.reducer';
import {rootSaga} from './root.saga';
import createSagaMiddleware from 'redux-saga';
import MMKVStorage from 'react-native-mmkv-storage';
// import logger from 'redux-logger';

const storage = new MMKVStorage.Loader().initialize();
const sagaMiddleware = createSagaMiddleware();
const middleware = [
  sagaMiddleware,
  ...getDefaultMiddleware({
    serializableCheck: false,
  }),
];

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['theme', 'user'],
  blacklist: [],
  debug: true,
  devTools: process.env.NODE_ENV !== 'production',
};

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middleware.push(createDebugger());
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export {store, persistor};
