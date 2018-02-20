import {
     NAME_CHANGE,
     EMAIL_CHANGE,
     PASSWORD_CHANGE,
     USER_REGISTER_ERROR,
     USER_REGISTER_SUCCESS,
     USER_AUTHENTICATION_ERROR,
     LOGIN_LOADING,
     REGISTER_LOADING
} from '../actions/types';

const INITIAL_STATE = {
     name: '',
     email: '',
     password: '',
     registerError: '',
     loginError: '',
     loginLoading: false,
     registerLoading: false
};

export default (state = INITIAL_STATE, action) => {
     switch (action.type) {
          case NAME_CHANGE:
               return { ...state, name: action.payload };
          case EMAIL_CHANGE:
               return { ...state, email: action.payload };
          case PASSWORD_CHANGE:
               return { ...state, password: action.payload };
          case USER_REGISTER_ERROR:
               return { ...state, registerError: action.payload, registerLoading: false };
          case USER_REGISTER_SUCCESS:
               return { ...state, name: '', password: '', registerLoading: false };
          case USER_AUTHENTICATION_ERROR:
               return { ...state, loginError: action.payload, loginLoading: false };
          case LOGIN_LOADING:
               return { ...state, loginLoading: true };
          case REGISTER_LOADING:
               return { ...state, registerLoading: true };
          default:
               return state;
     }
};
