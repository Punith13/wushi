import axios from 'axios';
import { GOOGLE_LOCATION_SEARCH, GOOGLE_MAP_CLEAR } from './ActionTypes';
import { googleMapAPIUrl, googleMapKey } from '../constants';

export const googleIconClick = type => dispatch => {
	dispatch({
		type: GOOGLE_MAP_CLEAR
	});

	dispatch({
		type: GOOGLE_LOCATION_SEARCH,
		payload: type
	});
};
