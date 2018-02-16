import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Routes from './src/routes';

class App extends Component {
     render() {
          return (
               <Routes />
          );
     }
}

AppRegistry.registerComponent('headsOrTails', () => App);
