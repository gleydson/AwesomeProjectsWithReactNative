import React, { Component } from 'react';
import { View, Text, Button, Image, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';

const logo = require('../images/logo.png');
const background = require('../images/bg.png');

export default class extends Component {
     render() {
          return (
               <ImageBackground source={background} style={{ flex: 1, width: null }}>
                    <View style={{ flex: 1, padding: 15 }}>
                         <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                              <Text
                                   style={{ fontSize: 30, color: '#fff', marginBottom: 20 }}
                              >Seja Bem Vindo</Text>
                              <Image source={logo} />
                         </View>
                         <View style={{ flex: 1 }}>
                              <Button
                                   title="Fazer Login"
                                   color='#115e54'
                                   onPress={() => Actions.loginForm()}
                              />
                         </View>
                    </View>
               </ImageBackground>
          );
     }
}
