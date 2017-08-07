import { combineReducers } from 'redux';
import googleMaps from './googleMapsReducer';
import storage from './storageReducer';

// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
    googleMaps, 
    storage
});

export default rootReducer;