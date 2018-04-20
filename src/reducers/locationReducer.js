import { GET_ATM_DATA } from '../Actions/ActionTypes'; 
const INITIAL_DATA = {
    atm: []
}
export default (state = INITIAL_DATA, action) => {

    switch(action.type){
        case GET_ATM_DATA: 

        const locations = action.payload.locationSearchResponse.locations;

        const markerData = locations.map( el => {
            return {
                id: el.atm.key, 
                position: {
                    lat: el.atm.latitude, 
                    lng: el.atm.longitude
                }
            }
        }); 
        
        return { ...state, atm: markerData }
        default: 
        return state;
    }
}