import { GETTING_ALIPAY_IMAGE } from '../Actions/ActionTypes'; 
const INITIAL_DATA = {
    alipayImage: ''
}
export default (state = INITIAL_DATA, action) => {

    switch(action.type){
        case GETTING_ALIPAY_IMAGE: 
        return { ...state, alipayImage: action.payload }
        default: 
        return state;
    }
}