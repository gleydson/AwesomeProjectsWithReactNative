import React, { Component } from 'react';
import { View, StatusBar, Image, StyleSheet, TouchableHighlight } from 'react-native';

import { Actions } from 'react-native-router-flux';

const logo = require('./../images/logo.png');
const menuCliente = require('./../images/menu_cliente.png');
const menuContato = require('./../images/menu_contato.png');
const menuEmpresa = require('./../images/menu_empresa.png');
const menuServico = require('./../images/menu_servico.png');

export default class SceneMain extends Component {
    render() {
        return (
            <View>
                <StatusBar
                    //hidden
                    backgroundColor='#ccc'
                />
                <View style={styles.logo}>
                    <Image source={logo} />
                </View>
                <View style={styles.menu}>
                    <View style={styles.groupMenu}>
                        <TouchableHighlight
                            underlayColor={'#b9c941'}
                            activeOpacity={0.3}
                            onPress={() => { Actions.client(); }}
                        >
                            <Image style={styles.imgMenu} source={menuCliente} />
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor={'#61bd8c'}
                            activeOpacity={0.3}
                            onPress={() => { Actions.contact(); }}
                        >
                            <Image style={styles.imgMenu} source={menuContato} />
                        </TouchableHighlight>
                    </View>
                    <View style={styles.groupMenu}>
                        <TouchableHighlight
                            underlayColor={'#ec7148'}
                            activeOpacity={0.3} 
                            onPress={() => { Actions.enterprise(); }}
                        >
                            <Image style={styles.imgMenu} source={menuEmpresa} />
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor={'#19d1c8'}
                            activeOpacity={0.3}
                            onPress={() => { Actions.service(); }}
                        >
                            <Image style={styles.imgMenu} source={menuServico} />
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        marginTop: 40,
        marginBottom: 40,
        alignItems: 'center'
    },
    menu: {
        alignItems: 'center'
    },
    groupMenu: {
        flexDirection: 'row'
    },
    imgMenu: {
        margin: 15
    }
});
