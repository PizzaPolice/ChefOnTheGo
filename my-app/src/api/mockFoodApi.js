// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
var foods = [
  {
      name: "food1",
      price: "10",
      desc: "desc1"
  },
  {
      name: "food2",
      price: "11",
      desc: "desc2"
  }
];

const delay = 0;

class FoodApi {
  static getAllFoods() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], foods));
      }, delay);
    });
  }

  static saveFood(food) {
    food = Object.assign({}, food); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (food.id) {
          const existingFoodIndex = foods.findIndex(a => a.id === food.id);
          foods.splice(existingFoodIndex, 1, food);
        } else {
          foods.push(food);
        }
        resolve(food);
      }, delay);
    });
  }

  static updateFood(food) {
      food = Object.assign({}, food);
      return new Promise((resolve, reject) => {
          setTimeout(() => {
            const existingFoodIndex = foods.findIndex(a => a.name === food.name);
            foods.splice(existingFoodIndex, 1, food);
            resolve(food);
        }, delay);
    });
  }

  static deleteFood(food) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfFoodToDelete = foods.findIndex(innerFood => {
          return food.name === innerFood.name;
        });
        foods.splice(indexOfFoodToDelete, 1);
        resolve(food);
      }, delay);
    });
  }
}

export default FoodApi;
