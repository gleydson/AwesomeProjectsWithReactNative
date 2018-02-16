import React, { Component } from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux';

import SceneContact from './src/components/scene-contact';
import SceneMain from './src/components/scene-main';
import SceneClient from './src/components/scene-client';
import SceneEnterprise from './src/components/scene-enterprise';
import SceneService from './src/components/scene-service';

class App extends Component {
  render() {
    return (
      <Router sceneStyle={styles.main} titleStyle={{ textAlign: 'center' }}>
        <Stack key="root">
          <Scene
            key="main"
            initial
            component={SceneMain}
            navigationBarStyle={styles.colorMain}
            titleStyle={{
              color: 'white',
              fontWeight: 'bold',
              alignSelf: 'center'
            }}
            title="ATM Consultoria"
          />
          <Scene 
            key="client"
            component={SceneClient}
            navigationBarStyle={styles.colorClient}
            titleStyle={{
              color: 'white',
              fontWeight: 'bold',
              alignSelf: 'center',
              marginLeft: -30 
            }}
            title="ATM Consultoria"
          />
          <Scene
            key="contact"
            component={SceneContact}
            navigationBarStyle={styles.colorContact}
            titleStyle={{
              color: 'white',
              fontWeight: 'bold',
              alignSelf: 'center',
              marginLeft: -30 
            }}
            title="ATM Consultoria"
          />
          <Scene
            key="enterprise"
            component={SceneEnterprise}
            navigationBarStyle={styles.colorEnterprise}
            titleStyle={{
              color: 'white',
              fontWeight: 'bold',
              alignSelf: 'center',
              marginLeft: -30 
            }}
            title="ATM Consultoria"
          />
          <Scene
            key="service"
              component={SceneService}
              navigationBarStyle={styles.colorService}
              titleStyle={{
                color: 'white',
                alignSelf: 'center',
                fontWeight: 'bold',
                marginLeft: -30 
              }}
              title="ATM Consultoria"
          />
        </Stack>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff'
  },
  colorMain: {
    backgroundColor: '#ccc'
  },
  colorClient: {
    backgroundColor: '#b9c941'
  },
  colorContact: {
    backgroundColor: '#61bd8c'
  },
  colorEnterprise: {
    backgroundColor: '#ec7148'
  },
  colorService: {
    backgroundColor: '#19d1c8'
  },
});

AppRegistry.registerComponent('atm', () => App);
