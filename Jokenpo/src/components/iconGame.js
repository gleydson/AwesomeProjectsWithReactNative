import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const rock = require('./../images/rock.png');
const paper = require('./../images/paper.png');
const scissors = require('./../images/scissors.png');

export default class IconGame extends Component {
    render() {
        if (this.props.choose === 'Pedra') {
            return (
                <View style={styles.icon}>
                    <Text style={styles.textPlayer}>{ this.props.player }</Text>
                    <Image source={rock} />
                </View>
            );
        }
        if (this.props.choose === 'Papel') {
            return (
                <View style={styles.icon}>
                    <Text style={styles.textPlayer}>{ this.props.player }</Text>
                    <Image source={paper} />
                </View>
            );
        }
        if (this.props.choose === 'Tesoura') {
            return (
                <View style={styles.icon}>
                    <Text style={styles.textPlayer}>{ this.props.player }</Text>
                    <Image source={scissors} />
                </View>
            );
        }
        return false;
    }
}

const styles = StyleSheet.create({
    icon: {
        alignItems: 'center',
        marginBottom: 20
    },
    textPlayer: {
        fontSize: 18
    }
});
