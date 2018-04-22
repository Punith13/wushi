import { GOOGLE_LOCATION_SEARCH } from '../Actions/ActionTypes';
const INITIAL_DATA = {
	googleLocation: ''
};
export default (state = INITIAL_DATA, action) => {
	switch (action.type) {
		case GOOGLE_LOCATION_SEARCH:
			return { ...state, googleLocation: action.payload, id: Math.floor(Math.random()) };
		default:
			return state;
	}
};
