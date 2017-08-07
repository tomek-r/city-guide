import * as types from '../constants/actionTypes';

export const initializeMapAction = (map) => ({
    type: type.INITIALIZE_MAP,
    map
});

export const addMarkerAction = (marker) => ({
    type: type.ADD_MARKER,
    marker
});

export const createRouteAction = (route) => ({
    type: type.CREATE_ROUTE,
    route
});

