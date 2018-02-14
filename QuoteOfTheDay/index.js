import React from 'react';
import { Text, View, Image, TouchableOpacity, Alert, AppRegistry } from 'react-native';

const Styles = {
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#538530',
        paddingVertical: 10,
        paddingHorizontal: 40,
        marginTop: 20
    },
    textButton: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
};

const generateNewQuote = () => {
    let numberRandom = Math.random();
    numberRandom = Math.floor(numberRandom * 3);

    let quotes = [
        'Não existe um caminho para a feliciade. A feliciade é o caminho.',
        'O tempo dura bastante para aqueles que sabem aproveitá-lo.',
        'Estou sempre alegre. Essa é a melhor maneira de resolver os problemas da vida.',
    ];
    let quoteChoose = quotes[numberRandom];
    Alert.alert("Esta é a sua frase:", quoteChoose);
};

const App = () => {
    const { main, button, textButton } = Styles;
    return (
        <View style={ main }>
            <Image source={require('./src/images/logo.png')} />

            <TouchableOpacity
            style={ button }
            onPress={ generateNewQuote }>
                <Text style={ textButton }>Nova frase</Text>
            </TouchableOpacity>
        </View>
    );
};

AppRegistry.registerComponent('QuoteOfTheDay', () => App);
