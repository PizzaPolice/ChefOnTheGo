import {combineReducers} from 'redux';
import foodReducer from './foodReducer';

const allReducers = combineReducers({
   foods: foodReducer 
});

export default allReducers;