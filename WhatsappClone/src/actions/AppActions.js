import firebase from 'firebase';
import b64 from 'base-64';
import _ from 'lodash';

import {
     CONTACT_ADD_EMAIL_CHANGE,
     CONTACT_ADD_EMAIL_ERROR,
     CONTACT_ADD_EMAIL_SUCCESS,
     CONTACT_USER_LIST,
     MESSAGE_CHANGE,
     LIST_CONVERSATION_USER,
     SEND_MESSAGE_SUCCESS
} from './types';

export const contactAddEmailChange = email => (
     {
          type: CONTACT_ADD_EMAIL_CHANGE,
          payload: email
     }
);

export const contactAdd = email => (
     dispatch => {
          const emailBase64 = b64.encode(email);
          firebase.database().ref(`/users/${emailBase64}`)
               .once('value')
               .then(snapshot => {
                    if (snapshot.val()) {
                         const userDates = _.first(_.values(snapshot.val()));
                         const { currentUser } = firebase.auth();
                         const userEmailB64 = b64.encode(currentUser.email);
                         firebase.database().ref(`/user_contacts/${userEmailB64}`)
                              .push({ email, name: userDates.name })
                              .then(() => contactAddEmailSuccess(dispatch))
                              .catch(error => contactAddEmailError(error.message, dispatch));
                    } else {
                         dispatch({
                              type: CONTACT_ADD_EMAIL_ERROR,
                              payload: 'E-mail informado não conrresponde a um usuário válido!'
                         });
                    }
               });
     }
);

const contactAddEmailError = (error, dispatch) => (
     dispatch(
          {
               type: CONTACT_ADD_EMAIL_ERROR,
               payload: error
          }
     )
);

const contactAddEmailSuccess = (dispatch) => (
     dispatch(
          {
               type: CONTACT_ADD_EMAIL_SUCCESS,
               payload: true
          }
     )
);


export const habilityContactAdd = () => (
     {
          type: CONTACT_ADD_EMAIL_SUCCESS,
          payload: false
     }
);

export const contactUserFetch = () => {
     const { currentUser } = firebase.auth();
     return dispatch => {
          const emailUserB64 = b64.encode(currentUser.email);
          firebase.database().ref(`/user_contacts/${emailUserB64}`)
               .on('value', snapshot => (
                    dispatch({ type: CONTACT_USER_LIST, payload: snapshot.val() })
               ));
     };
};

export const messageChange = text => (
     {
          type: MESSAGE_CHANGE,
          payload: text
     }
);

export const sendMessage = (message, contactName, contactEmail) => {
     const { currentUser } = firebase.auth();
     const userEmail = currentUser.email;
     return dispatch => {
          const userEmailB64 = b64.encode(userEmail);
          const contactEmailB64 = b64.encode(contactEmail);

          firebase.database().ref(`/posts/${userEmailB64}/${contactEmailB64}`)
               .push({ message, type: 'e' })
               .then(() => {
                    firebase.database().ref(`/posts/${contactEmailB64}/${userEmailB64}`)
                         .push({ message, type: 'r' })
                         .then(() => dispatch({ type: SEND_MESSAGE_SUCCESS }));
               })
               .then(() => {
                    firebase.database()
                         .ref(`/user_conversations/${userEmailB64}/${contactEmailB64}`)
                         .set({ name: contactName, email: contactEmail });
               })
               .then(() => {
                    firebase.database().ref(`/contacts/${userEmailB64}`)
                         .once('value')
                         .then(snapshot => {
                              const userDates = _.first(_.value(snapshot.val()));
                              console.log(userDates);
                              firebase.database()
                                   .ref(`/user_conversations/${contactEmailB64}/${userEmailB64}`)
                                   .set({ name: userDates.name, email: userEmail });
                         });
               });
     };
};

export const conversationUserFetch = contactEmail => {
     const { currentUser } = firebase.auth();
     const userEmail = currentUser.email;
     return dispatch => {
          const userEmailB64 = b64.encode(userEmail);
          const contactEmailB64 = b64.encode(contactEmail);
          firebase.database().ref(`/posts/${userEmailB64}/${contactEmailB64}`)
               .on('value', snapshot => {
                    dispatch({ type: LIST_CONVERSATION_USER, payload: snapshot.val() });
               });
     };
};
