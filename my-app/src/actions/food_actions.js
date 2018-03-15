import foodApi from '../api/mockFoodApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import * as types from './actionTypes';

export function loadFoodsSuccess(foods) {
  return { 
    type: types.LOAD_FOODS_SUCCESS, 
    payload: foods
  };
}

export function createFoodSuccess(food) {
  return {
    type: types.CREATE_FOOD_SUCCESS,
    payload: food
  };
}

export function updateFoodSuccess(food) {
  return {
    type: types.UPDATE_FOOD_SUCCESS, 
    payload: food
  };
}

export function deleteFoodSuccess(food) {
  return {
    type: types.DELETE_FOOD_SUCCESS,
    payload: food
  }
}

export function loadFoods() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return foodApi.getAllFoods().then(foods => {
      dispatch(loadFoodsSuccess(foods));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    })
  };
}

export function updateFood(food) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return foodApi.updateFood(food).then(food => {
      dispatch(updateFoodSuccess(food));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function saveFood(food) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return foodApi.saveFood(food).then(food => {
      food.id ? dispatch(updateFoodSuccess(food)) :
        dispatch(createFoodSuccess(food));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function deleteFood(food) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return foodApi.deleteFood(food).then(food => {
      dispatch(deleteFoodSuccess(food));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    })
  }
}