import {
     CONTACT_ADD_EMAIL_CHANGE,
     CONTACT_ADD_EMAIL_ERROR,
     CONTACT_ADD_EMAIL_SUCCESS,
     MESSAGE_CHANGE,
     SEND_MESSAGE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
     contactAddEmail: '',
     contactAddEmailError: '',
     contactAddEmailResult: false,
     message: ''
};

export default (state = INITIAL_STATE, action) => {
     switch (action.type) {
          case CONTACT_ADD_EMAIL_CHANGE:
               return { ...state, contactAddEmail: action.payload };
          case CONTACT_ADD_EMAIL_ERROR:
               return { ...state, contactAddEmailError: action.payload };
          case CONTACT_ADD_EMAIL_SUCCESS:
               return { ...state, contactAddEmailResult: action.payload, contactAddEmail: '' };
          case MESSAGE_CHANGE:
               return { ...state, message: action.payload };
          case SEND_MESSAGE_SUCCESS:
               return { ...state, message: '' };
          default:
               return state;
     }
};
