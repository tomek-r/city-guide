import { put, call } from 'redux-saga/effects';
import { createRoute } from '../Api/googleMapsApi';
import * as types from '../constants/actionTypes';

export function* createRouteSaga(payload) {
    const route = yield call(createRoute, payload);

    yield put({ type: types.ROUTE_CREATED, route });
};