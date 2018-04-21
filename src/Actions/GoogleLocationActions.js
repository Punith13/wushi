import axios from 'axios';
import { GOOGLE_LOCATION_SEARCH } from './ActionTypes';
import { googleMapAPIUrl, googleMapKey } from '../constants';

export const googleIconClick = (type) => {

    return {
        type: GOOGLE_LOCATION_SEARCH, 
        payload: type
    }

}

export const getGooglePlaces = ( inputType, center) => async dispatch => {
    
        console.log(center);
    
        const url = `${googleMapAPIUrl}&input=${inputType}&types=establishment&location=${center.lat},${center.lng}&radius=500&key=${googleMapKey}`
    
        const options = {
            method : 'GET', 
            url
        }
    
        const res = await axios(options);
    
        console.log(res);
    
        dispatch({
            type: GOOGLE_LOCATION_SEARCH, 
            payload: 'Asian Grocery'
        })
    
    }