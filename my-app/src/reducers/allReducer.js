import {combineReducers} from 'redux';
import food_reducer from './food_reducer';
import ajaxCallsInProgress from './ajaxReducer';

const allReducers = combineReducers({
   foods: food_reducer,
   ajaxCallsInProgress: ajaxCallsInProgress
});

export default allReducers;
