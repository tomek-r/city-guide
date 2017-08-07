import { put, call } from 'redux-saga/effects';
import { addMarker } from '../Api/googleMapsApi';
import * as types from '../constants/actionTypes';

export function* addMarkerSaga({ payload }) {
    const marker = yield call(addMarker, payload);

    yield put({ type: types.MARKER_ADDED, marker });
}