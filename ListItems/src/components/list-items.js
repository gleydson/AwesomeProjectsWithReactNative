import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import Item from './item';

const source = 'http://faus.com.br/recursos/c/dmairr/api/itens.html';

export default class ListItems extends Component {

    constructor(props) {
        super(props);
        this.state = { listItems: [] };
    }

    componentWillMount() {
        axios.get(source)
            .then(response => this.setState({ listItems: response.data }))
            .catch(() => console.log('Erro ao executar requisição get'));
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: '#ddd' }}>
                {this.state.listItems.map(item => <Item key={item.titulo} item={item} />)}
            </ScrollView>
        );
    }
}
