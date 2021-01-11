import { combineReducers } from 'redux';
import { loginReducer } from './reducers/LoginReducer';
import { userProfileReducer } from './reducers/UserProfileReducer';
import { firebaseAuthReducer } from './reducers/FirebaseAuthReducer';

export default combineReducers({
  loginRegistration: loginReducer,
  firebaseAuth: firebaseAuthReducer,
  userProfile: userProfileReducer,
});
