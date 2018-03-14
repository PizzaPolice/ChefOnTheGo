import { ADD_FOOD, DELETE_FOOD } from '../actions/food_actions.js'

export default function food_reducer(state = [], action) {
  switch (action.type)
  {
    case ADD_FOOD:
        return [ ...state, action.payload];
    
    case DELETE_FOOD:
        return [...state].filter(food => {
            return food["name"] !== action.payload.name;
        });
        
    default:
      return state;
  }
}
