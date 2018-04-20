import { combineReducers } from 'redux'; 
import locationReducer from './locationReducer';

let rootReducer = combineReducers({
    locationState: locationReducer
})

export default rootReducer;