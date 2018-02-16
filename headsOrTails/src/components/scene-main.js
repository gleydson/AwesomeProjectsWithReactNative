import React, { Component } from 'react';
import { View, Image, TouchableHighlight, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

const logo = require('./../images/logo.png');
const buttonPlay = require('./../images/botao_jogar.png');
const buttonAboutGame = require('./../images/sobre_jogo.png');
const buttonOtherGames = require('./../images/outros_jogos.png');

export default class SceneMain extends Component {
     render() {
          return (
               <View style={styles.mainGame}>
                    <View style={styles.viewGame}>
                         <Image source={logo} />
                         <TouchableHighlight
                              onPress={() => Actions.result()}
                         >
                              <Image source={buttonPlay} />
                         </TouchableHighlight>
                    </View>
                    <View style={styles.viewFooter}>
                         <TouchableHighlight
                              onPress={() => Actions.about()}
                         >
                              <Image source={buttonAboutGame} />
                         </TouchableHighlight>
                         <TouchableHighlight
                              onPress={() => Actions.others()}
                         >
                              <Image source={buttonOtherGames} />
                         </TouchableHighlight>
                    </View>
               </View>
          );
     }
}

const styles = StyleSheet.create({
     mainGame: {
          flex: 1,
     },
     viewGame: {
          flex: 10,
          justifyContent: 'center',
          alignItems: 'center'
     },
     viewFooter: {
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between'
     }
});
