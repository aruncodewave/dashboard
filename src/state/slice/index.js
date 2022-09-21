import { combineReducers } from 'redux';
import authSlice from './authSlice';

export const RootReducers = combineReducers({ app: authSlice });
