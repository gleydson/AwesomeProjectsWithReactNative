import React, { Component } from 'react';
import { View, Image, Text, StatusBar, StyleSheet } from 'react-native';

const detailsService = require('../images/detalhe_servico.png');

export default class SceneService extends Component {
     render() {
          return (
               <View>
                    <StatusBar
                         backgroundColor='#19d1c8'
                    />
                    <View style={styles.header}>
                         <Image source={detailsService} />
                         <Text style={styles.textTitle}>Nossos Serviços</Text>
                    </View>
                    <View style={styles.detailsService}>
                         <Text style={styles.textDetailsService}>
                              - Consultoria.
                         </Text>
                         <Text style={styles.textDetailsService}>
                              - Processos.
                         </Text>
                         <Text style={styles.textDetailsService}>
                              - Acompanhamento de projetos.
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
         color: '#19d1c8',
         marginLeft: 15,
         paddingTop: 20,
         fontWeight: 'bold'
     },
     detailsService: {
         padding: 20
     },
     textDetailsService: {
         fontSize: 18
     }
 });
