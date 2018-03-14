//Actions
export const ADD_DISH = "ADD_DISH"
export const DELETE_DISH = "DELETE_DISH"

//Set the person who is currently logged in
export const SET_LOGIN = "SET_LOGIN"

export function addDish(dish) {
  console.log(dish);
  return {
    type: ADD_DISH,
    payload: dish
  }
};