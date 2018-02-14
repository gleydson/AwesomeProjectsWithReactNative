import React, { Component } from 'react';
import { Text, View, AppRegistry, Button, StyleSheet } from 'react-native';
import Header from './src/components/header';
import IconGame from './src/components/iconGame'; 

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userChoose: '',
            pcChoose: '',
            result: ''
        };
    }

    transformChoice(choose) {
        if (choose === 1) return 'Pedra';
        if (choose === 2) return 'Papel';
        return 'Tesoura';
    }

    resultGame(userChoose, pcChoose) {
        if (userChoose === pcChoose) return 'Empate';
        if ((userChoose === 'Pedra' && pcChoose === 'Tesoura') ||
            (userChoose === 'Papel' && pcChoose === 'Pedra') ||
            (userChoose === 'Tesoura' && pcChoose === 'Papel')) return 'Você venceu!';
        return 'Você perdeu!';
    }

    jokenpo(userChoose) {
        const numberRandom = Math.floor(Math.random() * 3) + 1;
        const pcChoose = this.transformChoice(numberRandom); 
        const result = this.resultGame(userChoose, pcChoose);
        this.setState({ userChoose, pcChoose, result });
    }

    render() {
        return (
            <View>
                <Header />    
                <View style={styles.actions}>
                    <View style={styles.buttonChoice}>
                        <Button title="Pedra" onPress={() => this.jokenpo('Pedra')} />
                    </View>
                    <View style={styles.buttonChoice}>
                        <Button title="Papel" onPress={() => this.jokenpo('Papel')} />
                    </View>
                    <View style={styles.buttonChoice}>
                        <Button title="Tesoura" onPress={() => this.jokenpo('Tesoura')} />
                    </View>
                </View>
                <View style={styles.stage}>
                    <Text style={styles.textResult}>{ this.state.result }</Text>
                    <IconGame choose={this.state.pcChoose} player='Computador' />
                    <IconGame choose={this.state.userChoose} player='Você' />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonChoice: {
        width: 90,
        marginTop: 10,
        marginBottom: 10
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    stage: {
        alignItems: 'center'
    },
    textResult: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red',
        height: 40,
        marginBottom: 30
    }
});

AppRegistry.registerComponent('Jokenpo', () => App);
