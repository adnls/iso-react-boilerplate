import { FETCH_CURRENT_USER } from '../actions/index.js';

export default (state = null, action) => {
    switch (action.type) {
        case FETCH_CURRENT_USER:
            //console.log(action.payload.headers);
            return action.payload.data || false;
        default:
            return state;
    }
}