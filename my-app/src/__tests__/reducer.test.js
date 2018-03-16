import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import ajaxStatusReducer from '../reducers/ajaxReducer.js';
import actionTypeEndsInSuccess from '../reducers/allReducer.js';
import food_reducer from '../reducers/food_reducer';
import ajaxCallsInProgress from '../reducers//ajaxReducer';
import * as types from '../actions/actionTypes';
import { combineReducers } from 'redux';


//food_reducer tests
describe('food_reducer', function() {

    it('should return the initial state', () => {
        expect(food_reducer(undefined, {})).toEqual([]);
    })

    //validate that the reducer changes the LOAD_FOODS_SUCCESS field in the state correctly
    it('should react to an action with the type LOAD_FOODS_SUCCESS', function() {
        expect(food_reducer(undefined, {
        type: 'LOAD_FOODS_SUCCESS'})).toEqual();
    });

    //validate that the reducer changes the UPDATE_FOOD_SUCCESS field in the state correctly
    it('should react to an action with the type UPDATE_FOOD_SUCCESS', function() {
        expect(food_reducer(undefined, {
        type: 'UPDATE_FOOD_SUCCESS'})).toEqual([{}]);
    });

    //validate that the reducer changes the CREATE_FOOD_SUCCESS field in the state correctly
    it('should react to an action with the type CREATE_FOOD_SUCCESS', function() {
        expect(food_reducer(undefined, {
        type: 'CREATE_FOOD_SUCCESS'})).toEqual([{}]);
    });
  });

//ajaxReducer tests
  describe('ajaxStatusReducer', function() {

  it('should react to an action with the type BEGIN_AJAX_CALL', function() {
    expect(ajaxStatusReducer(undefined, {
    type: 'BEGIN_AJAX_CALL'})).toEqual(1);
  });

  it('should react to an action with the type AJAX_CALL_ERROR', function() {
    expect(ajaxStatusReducer(undefined, {
    type: 'AJAX_CALL_ERROR'})).toEqual(-1);
  });

});


