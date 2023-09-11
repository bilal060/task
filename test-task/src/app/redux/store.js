import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import Reducer from './Reducer';
import * as ActionTypes from './ActionTypes';

const persistConfig = {
  key: 'test-task',
  storage,
};

const allReducers = combineReducers({
  details: Reducer,
});

const rootReducer = (state, action) => {
  if (action.type === ActionTypes.RESET_DETAILS) {
    state = undefined;
  }
  return allReducers(state, action);
};

let store = createStore(persistReducer(persistConfig, rootReducer));
store.__PERSISTOR = persistStore(store);

export default store;
