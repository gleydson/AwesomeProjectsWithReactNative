import React, { Component } from 'react';
import { View, Image, Text, StatusBar, StyleSheet } from 'react-native';

const detailsContact = require('../images/detalhe_contato.png');

export default class SceneContact extends Component {
     render() {
          return (
               <View>
                    <StatusBar
                         backgroundColor='#61bd8c'
                    />
                    <View style={styles.header}>
                         <Image source={detailsContact} />
                         <Text style={styles.textTitle}>Contatos</Text>
                    </View>
                    <View style={styles.detailsContact}>
                         <Text>TEL: (11) 1234-5678</Text>
                         <Text>CEL: (11) 91234-5678</Text>
                         <Text>contato@atm.com.br</Text>
                    </View>
               </View>
          );
     }
}

const styles = StyleSheet.create({
     header: {
         flexDirection: 'row'
     },
     textTitle: {
         fontSize: 40,
         color: '#61bd8c',
         marginLeft: 15,
         paddingTop: 35,
         fontWeight: 'bold'
     },
     detailsContact: {
         padding: 20
     },
     textDetailsClient: {
         fontSize: 18
     }
 });
