import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import ListItems from './src/components/list-items';

class App extends Component {
    render() {
        return (
            <ListItems />
        );
    }
}

AppRegistry.registerComponent('ListItems', () => App);
