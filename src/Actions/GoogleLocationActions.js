import axios from 'axios';
import { GOOGLE_LOCATION_SEARCH } from './ActionTypes';
import { googleMapAPIUrl, googleMapKey } from '../constants';

export const googleIconClick = (type) => {

    return {
        type: GOOGLE_LOCATION_SEARCH, 
        payload: type
    }
}