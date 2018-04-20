import axios from 'axios';
import { GET_ATM_DATA } from './ActionTypes';

export const getlocation = () => async dispatch => {
    const headers = {
        'x-nab-key':'0c12ce1a-f5a5-4933-b5aa-c27e14c757d7',
        'Content-Type': 'application/json'
    }

    const options = {
        method: 'GET', 
        url: 'https://hackathon.api.extnp.nab.com.au/v2/locations?v=1&locationType=atm&startIndex=1',
        headers, 
        
    }

    const res = await axios(options)
    dispatch({
        type: GET_ATM_DATA, 
        payload: res.data
    })
}

