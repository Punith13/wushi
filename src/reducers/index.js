import { combineReducers } from 'redux'; 
import locationReducer from './locationReducer';
import googleLocationReducer from './googleLocationReducer';
import alipayReducer from './alipayReducer';

let rootReducer = combineReducers({
    locationState: locationReducer, 
    googleLocationState: googleLocationReducer, 
    alipayState: alipayReducer
})

export default rootReducer;