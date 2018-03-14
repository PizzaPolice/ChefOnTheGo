import { ADD_FOOD, DELETE_FOOD } from '../actions/food_actions.js'

export default function food_reducer(state=[], action) {
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
