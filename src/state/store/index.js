import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import { RootReducers } from '../slice';
import {  persistStore,persistReducer } from 'redux-persist';

export const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, RootReducers);

 const store = configureStore({
  reducer:persistedReducer ,
  middleware: [thunk, logger] ,
})


const persistor = persistStore(store);

export { store, persistor };