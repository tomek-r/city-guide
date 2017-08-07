import * as types from '../constants/actionTypes';

export const initializeMapAction = (map) => ({
    type: types.INITIALIZE_MAP,
    map
});

export const addMarkerAction = (marker) => ({
    type: types.ADD_MARKER,
    marker
});

export const createRouteAction = (route) => ({
    type: types.CREATE_ROUTE,
    route
});

