import AsyncStorage from "@react-native-async-storage/async-storage";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { persistCombineReducers, persistReducer, persistStore } from 'redux-persist';
import thunk from "redux-thunk";

import reducer from '../reducres';

const persistConfig = {
    storage: AsyncStorage,
    key: 'root',
    whiteList: []
}

const persistedReducer = persistReducer(persistConfig, reducer);
export const store = createStore(persistedReducer, {}, applyMiddleware(thunk));
export const persistedStore = persistStore(store);