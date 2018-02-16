import React, { Component } from 'react';
import { View, Image, Text, StatusBar, StyleSheet } from 'react-native';

const detailsContact = require('../images/detalhe_empresa.png');

export default class SceneEnterprise extends Component {
     render() {
          return (
               <View>
                    <StatusBar
                         backgroundColor='#ec7148'
                    />
                    <View style={styles.header}>
                         <Image source={detailsContact} />
                         <Text style={styles.textTitle}>A Empresa</Text>
                    </View>
                    <View style={styles.detailsEnterprise}>
                         <Text style={styles.textDetailsEnterprise}>
                              A ATM Consultoria está no mercado a mais de 20 anos.
                         </Text>
                    </View>
               </View>
          );
     }
}

const styles = StyleSheet.create({
     header: {
         flexDirection: 'row',
         marginTop: 5
     },
     textTitle: {
         fontSize: 40,
         color: '#ec7148',
         marginLeft: 15,
         paddingTop: 20,
         fontWeight: 'bold'
     },
     detailsEnterprise: {
         padding: 20
     },
     textDetailsEnterprise: {
         fontSize: 18
     }
 });
