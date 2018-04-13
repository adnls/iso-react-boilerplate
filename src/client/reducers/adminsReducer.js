import { FETCH_ADMINS } from '../actions/index.js';

export default ( state = [], action) => {
    switch (action.type) {
        case FETCH_ADMINS:
            return action.payload.data;
        default: 
            return state; 
    }
}