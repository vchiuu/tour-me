import { combineReducers } from 'redux';

const INITIAL_STATE = {
    onLoad: true, 
    formType: 'SignIn'
}

const loginRegistrationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TOGGLE_FORM': 
            onLoad = action.payload.onLoad;
            formType = action.payload.formType;
            return { ...state, onLoad, formType };
        default:
            return state;
    }
};

export default combineReducers({
    loginRegistration: loginRegistrationReducer, 
});
