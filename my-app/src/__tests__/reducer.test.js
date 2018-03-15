import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import ajaxStatusReducer from '../reducers/ajaxReducer.js';
import allReducers from '../reducers/allReducer.js';
import food_reducer from '../reducers/food_reducer';
import ajaxCallsInProgress from '../reducers//ajaxReducer';
import { combineReducers } from 'redux';


//Reducer tests
it('should return the initial state', () => {
    expect(food_reducer(undefined, {})).toEqual([]);
})




/*
const initialState = {
    foods: food_reducer,
    ajaxCallsInProgress: ajaxCallsInProgress
  };

describe('all reducer test', () => {
    it('should have initial state', () => {
      expect(allReducers(undefined, {})).toEqual({});
    });
});*/

