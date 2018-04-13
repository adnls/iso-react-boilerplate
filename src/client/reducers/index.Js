import { combineReducers } from 'redux';
import usersReducer from './usersReducer.js';
import authReducer from './authReducer.js';
import adminsReducer from './adminsReducer.js';

export default combineReducers({
    users: usersReducer,
    auth: authReducer,
    admins: adminsReducer
});