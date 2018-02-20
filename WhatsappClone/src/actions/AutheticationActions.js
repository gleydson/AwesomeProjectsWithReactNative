import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';

import {
     NAME_CHANGE,
     EMAIL_CHANGE,
     PASSWORD_CHANGE,
     USER_REGISTER_ERROR,
     USER_REGISTER_SUCCESS,
     USER_AUTHENTICATION_ERROR,
     USER_AUTHENTICATION_SUCCESS,
     LOGIN_LOADING,
     REGISTER_LOADING
} from './types';

export const nameChange = name => ({
          type: NAME_CHANGE,
          payload: name
});

export const emailChange = email => ({
          type: EMAIL_CHANGE,
          payload: email
});

export const passwordChange = password => ({
          type: PASSWORD_CHANGE,
          payload: password
});

export const userRegister = ({ name, email, password }) => (
     dispatch => {
          dispatch({ type: REGISTER_LOADING });
          firebase.auth().createUserWithEmailAndPassword(email, password)
               .then(user => {
                    const emailB64 = b64.encode(email);
                    firebase.database().ref(`/users/${emailB64}`)
                         .push({ name })
                         .then(values => userRegisterSuccess(dispatch));  
               })
               .catch(error => userRegisterError(error, dispatch));
     }
);

export const userAuthentication = ({ email, password }) => (
     dispatch => {
          dispatch({ type: LOGIN_LOADING });
          firebase.auth().signInWithEmailAndPassword(email, password)
               .then(values => userAuthenticationSuccess(dispatch))
               .catch(error => userAuthenticationError(error, dispatch));
     }
);

const userRegisterSuccess = (dispatch) => {
     dispatch({ type: USER_REGISTER_SUCCESS });
     Actions.welcome();
};

const userRegisterError = (error, dispatch) => {
     dispatch({ type: USER_REGISTER_ERROR, payload: error.message });
};

const userAuthenticationSuccess = (dispatch) => {
     dispatch({ type: USER_AUTHENTICATION_SUCCESS });
     Actions.main();
};

const userAuthenticationError = (error, dispatch) => {
     dispatch({ type: USER_AUTHENTICATION_ERROR, payload: error.message });
};
