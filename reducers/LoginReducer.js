const LOGIN_INITIAL_STATE = {
  onLoad: true,
  formType: 'SignIn',
};

export const loginReducer = (state = LOGIN_INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_FORM':
      const onLoad = action.payload.onLoad;
      const formType = action.payload.formType;
      return { ...state, onLoad, formType };
    default:
      return state;
  }
};
