import {createStore, applyMiddleware} from 'redux';
import allReducer from '../reducers/allReducer';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  return createStore(
    allReducer,
    applyMiddleware(thunk)
  );
}