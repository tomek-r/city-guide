import initialState from './initialState';
import * as types from '../constants/actionTypes';

// Handles google maps related actions
export default function (state = initialState, action) {
  switch (action.type) {
    case types.INITIALIZE_MAP:
        return { ...state, map: action.map };
    case types.ADD_MARKER:
        return {
            ...state,
            markers: [
                ...state.markers,
                {
                    position: action.position,
                    index: action.markers.length + 1
                }
            ]
        };
    case types.CREATE_ROUTE:
        return {
            ...state,
            routes: [
                ...state.routes.slice(action.index - 1),
                {
                    startPoint: state.routes[action.index].markers.shift(),
                    endPoint: state.routes[action.index].markers.pop(),
                    markers: state.routes[action.index].markers
                },
                ...state.routes.slice(action.index),
            ]
            
        };
    default:
      return state;
  }
}