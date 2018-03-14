//Actions
export const ADD_DISH = "ADD_DISH"
export const DELETE_DISH = "DELETE_DISH"

export function addDish(dish)
{
  return {type:ADD_DISH,dish}
}
