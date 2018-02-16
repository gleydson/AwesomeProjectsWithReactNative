import React, { Component } from 'react';
import { View, StatusBar, Image, StyleSheet, Text } from 'react-native';

const detailsClient = require('./../images/detalhe_cliente.png');
const clientOne = require('./../images/cliente1.png');
const clienteTwo = require('./../images/cliente2.png');

export default class SceneClient extends Component {
    render() {
        return (
            <View>
                <StatusBar
                    //hidden
                    backgroundColor='#b9c941'
                />
                <View style={styles.header}>
                    <Image source={detailsClient} />
                    <Text style={styles.textTitle}>Nossos Clientes</Text>
                </View>
                <View style={styles.detailsClient}>                   
                    <Image source={clientOne} />
                    <Text style={styles.textDetailsClient}>lorem ipsum dolor</Text>
                </View>
                <View style={styles.detailsClient}>                   
                    <Image source={clienteTwo} />
                    <Text style={styles.textDetailsClient}>lorem ipsum dolor</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        marginTop: 20
    },
    textTitle: {
        fontSize: 40,
        color: '#b9c941',
        marginLeft: 15,
        marginTop: 25,
        fontWeight: 'bold'
    },
    detailsClient: {
        padding: 20,
        marginTop: 10
    },
    textDetailsClient: {
        marginLeft: 20,
        fontSize: 18
    }
});
