//Actions
export const ADD_FOOD = "ADD_FOOD"
export const DELETE_FOOD = "DELETE_FOOD"


//Action creators
export function addFood(food)
{
  console.log(food);
  return {
    type:ADD_FOOD,
    payload: food
  }
}

export function deleteFood(food)
{
  return { type: DELETE_FOOD, food }
}


