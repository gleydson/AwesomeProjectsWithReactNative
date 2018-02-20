import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers';

export default class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDDt1dhKOhu-Yw6hSCLaVyRxidoAXVEi_M',
      authDomain: 'whatsapp-clone-b4983.firebaseapp.com',
      databaseURL: 'https://whatsapp-clone-b4983.firebaseio.com',
      projectId: 'whatsapp-clone-b4983',
      storageBucket: 'whatsapp-clone-b4983.appspot.com',
      messagingSenderId: '741475136812'
    });
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes />
      </Provider>
    );
  }
}
