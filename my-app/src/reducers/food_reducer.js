import { ADD_FOOD, DELETE_FOOD } from '../actions/food_actions.js'

const initialState = { foods: [] }
export default function addFood(state, action) {
  switch (action.type)
  {
    case ADD_FOOD:
      return [
      
      ]
    case DELETE_FOOD:
      return []
    default:
      return state
  }

}
