import * as types from '../actions/actionTypes';

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === '_SUCCESS';
}

export default function ajaxStatusReducer(state = 0, action) {
  if (action.type === types.BEGIN_AJAX_CALL) {
    return state + 1;
  } 
  else if (action.type === types.AJAX_CALL_ERROR ||
    actionTypeEndsInSuccess(action.type)) {
    return state - 1;
  }

  return state;
}