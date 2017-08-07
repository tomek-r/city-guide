import { put, call } from 'redux-saga/effects';
import { setupMap } from '../Api/googleMapsApi';
import * as types from '../constants/actionTypes';

// Responsible for searching media library, making calls to the API
// and instructing the redux-saga middle ware on the next line of action,
// for success or failure operation.
export function* initializeMapSaga({ payload }) {
    try {
        const map = yield call(setupMap, payload);

        yield put({ type: types.MAP_INITIALIZED, map });
    } catch (error) {
        yield put({ type: types.MAP_NOT_INITIALIZED, error });
    }
}