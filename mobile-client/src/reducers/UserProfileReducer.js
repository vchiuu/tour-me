import pick from 'lodash/pick';

const USER_INITIAL_STATE = {
  firstName: '',
  lastName: '',
  location: '',
  email: '',
  isSignedIn: false,
  isLoading: false,
  profileBackgroundColor: null,
  profileImage: null,
  profileHero: null,
  quote: '',
};

export const userProfileReducer = (state = USER_INITIAL_STATE, action) => {
  console.log(state.profileImage);
  switch (action.type) {
    case 'SET_USER_INFO':
      return {
        ...state,
        ...pick(action.payload, ['firstName', 'lastName', 'email', 'profileBackgroundColor', 'profileImage']),
        isSignedIn: true,
      };
    case 'SET_PROFILE_IMAGE_REQUEST':
      return {
        ...state,
        isLoading: true,
      };
    case 'SET_PROFILE_IMAGE_SUCCESS':
      return {
        ...state,
        isLoading: false,
        profileBackgroundColor: action.payload.profileBackgroundColor,
        profileImage: action.payload.profileImage,
      };
    case 'SET_PROFILE_IMAGE_FAILURE':
      return {
        ...state,
        isLoading: false,
      };
    case 'SET_PROFILE_HERO_REQUEST':
      return {
        ...state,
        isLoading: true,
      };
    case 'SET_PROFILE_HERO_SUCCESS':
      return {
        ...state,
        isLoading: false,
        profileHero: action.payload.profileHero,
      };
    case 'SET_PROFILE_HERO_FAILURE':
      return {
        ...state,
        isLoading: false,
      };
    case 'SET_PROFILE_INFO_REQUEST':
      return {
        ...state,
        isLoading: true,
      };
    case 'SET_PROFILE_INFO_SUCCESS':
      return {
        ...state,
        isLoading: false,
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        location: action.payload.location,
        quote: action.payload.quote,
      };
    case 'SET_PROFILE_INFO_FAILURE':
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
