import { combineReducers } from 'redux';
import { loginReducer } from './reducers/LoginReducer';
import { userProfileReducer } from './reducers/UserProfileReducer';

export default combineReducers({
  loginRegistration: loginReducer,
  userProfile: userProfileReducer,
});
