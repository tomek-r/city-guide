import * as types from '../constants/actionTypes';

export const saveRoutesAction = (routes) => ({
    type: type.SAVE_ROUTE,
    routes
});

export const listRoutesAction = (routes) => ({
    type: type.ADD_MARKER,
    routes
});

export const selectedRouteAction = (route) => ({
    type: type.CREATE_ROUTE,
    route
});

