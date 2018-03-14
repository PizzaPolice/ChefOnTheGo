import {combineReducers} from 'redux';
import food_reducer from './food_reducer';

const allReducers = combineReducers({
   foods: food_reducer 
});

export default allReducers;
