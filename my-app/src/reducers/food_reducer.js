import * as types from '../actions/actionTypes.js'

export default function food_reducer(state = [], action) {
  switch (action.type)
  {
           
    case types.LOAD_FOODS_SUCCESS: 
        return action.payload;
    
    case types.UPDATE_FOOD_SUCCESS:
        return [
            ...state.filter(food => food.name !== action.payload.name),
            Object.assign({}, action.payload)
        ];

    case types.CREATE_FOOD_SUCCESS:
        return [
            ...state,
            Object.assign({}, action.payload)
        ];

    case types.DELETE_FOOD_SUCCESS:
        return [
            ...state.filter(food => food.name !== action.payload.name)
        ];

    default:
      return state;
  }
}