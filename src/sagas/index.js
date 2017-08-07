import { fork } from 'redux-saga/effects';
import { watchInitializeMapSaga, watchAddMarkerSaga, watchCreateRouteSaga } from './watcher';

export default function* rootSaga() {
    yield fork(watchInitializeMapSaga);
    yield fork(watchAddMarkerSaga);
    yield fork(watchCreateRouteSaga);
}