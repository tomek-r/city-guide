import { takeLatest } from 'redux-saga/effects';
import { initializeMapSaga } from './initializeMapSaga';
import { addMarkerSaga } from './addMarkerSaga';
import { createRouteSaga } from './createRouteSaga';
import * as types from '../constants/actionTypes';

export function* watchInitializeMapSaga() {
    yield takeLatest(types.INITIALIZE_MAP, initializeMapSaga);
}

export function* watchAddMarkerSaga() {
    yield takeLatest(types.ADD_MARKER, addMarkerSaga);
}

export function* watchCreateRouteSaga() {
    yield takeLatest(types.CREATE_ROUTE, createRouteSaga);
}