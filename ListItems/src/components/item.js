import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class Item extends Component {
    render() {
        return (
            <View style={styles.item}>
                <View style={styles.image}>
                    <Image
                        style={{ height: 100, width: 100 }}
                        source={{ uri: this.props.item.foto }}
                    />
                </View>
                <View style={styles.details}>
                    <Text style={styles.title}>
                        {this.props.item.titulo}
                    </Text>
                    <Text style={styles.value}>
                        R$ {this.props.item.valor}
                    </Text>
                    <Text style={styles.textDetails}>
                        Local: {this.props.item.local_anuncio}
                    </Text>
                    <Text style={styles.textDetails}>
                        Publicado em: {this.props.item.data_publicacao}
                    </Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    item: {
        borderWidth: 0.5,
        borderColor: '#999',
        margin: 5,
        padding: 10,
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    image: {
        width: 102,
        height: 102
    },
    details: {
        marginLeft: 20,
        flex: 1
    },
    title: {
        fontSize: 18,
        color: 'blue',
        marginBottom: 5
    },
    value: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5
    },
    textDetails: {
        fontSize: 16
    }
});
