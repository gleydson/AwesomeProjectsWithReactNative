import React, { Component } from 'react';
import { View, Image } from 'react-native';

const logo = require('./../images/jokenpo.png');

export default class Header extends Component {
    render() {
        return (
            <View>
                <Image source={logo} />
            </View>
        );
    }
}
