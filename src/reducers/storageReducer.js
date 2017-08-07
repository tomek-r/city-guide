import initialState from './initialState';
import * as types from '../constants/actionTypes';

// Handles google maps related actions
export default function (state = initialState, action) {
  switch (action.type) {
    case types.SAVE_ROUTES:
        return { ...state };
    case types.LIST_ROUTES:
        return [ ...state, action.markers ];
    case types.SELECTED_ROUTE:
        return { ...state, selectedRoute: action.route };
    default:
      return state;
  }
}