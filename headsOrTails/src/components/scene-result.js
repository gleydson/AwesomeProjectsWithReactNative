import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';

const face = require('./../images/moeda_cara.png');
const crown = require('./../images/moeda_coroa.png');

export default class SceneResult extends Component {

     constructor(props) {
          super(props);

          this.state = { result: '' };
     }

     componentWillMount() {
          const numberRandom = Math.floor(Math.random() * 2) + 1;
          let result = '';

          if (numberRandom === 1) result = 'face';
          if (numberRandom === 2) result = 'crown';

          this.setState({ result });
     }

     render() {
          if (this.state.result === 'face') {
               return (
                    <View style={styles.coin}>
                         <Image source={face} />
                    </View>
               );
          }
          return (
               <View style={styles.coin}>
                    <Image source={crown} />
               </View>
          );
     }
}

const styles = StyleSheet.create({
     coin: {
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1
     }
});
