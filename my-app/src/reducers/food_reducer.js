import { ADD_FOOD, DELETE_FOOD } from '../actions/food_actions.js'

export default function food_reducer(state=[], action) {

  var copyFoodList = state.splice();
  switch (action.type)
  {
    case ADD_FOOD:
      copyFoodList.push(action.payload);
      return copyFoodList;
    case DELETE_FOOD:
      for (var x = 0; x < copyFoodList.length; x ++)
      {
        if (copyFoodList[x]["dish_name"] === action.payload["dish_name"] && copyFoodList[x]["chef_name"] === action.payload["chef_name"])
        {
          copyFoodList.splice(x,1);
        }
      }
      return copyFoodList;
    default:
      return state
  }
}
