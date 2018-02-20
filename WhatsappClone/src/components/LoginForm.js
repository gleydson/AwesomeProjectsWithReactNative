import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableHighlight,
  ImageBackground,
  ActivityIndicator
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import {
  emailChange,
  passwordChange,
  userAuthentication
} from '../actions/AutheticationActions';

const background = require('../images/bg.png');

class loginForm extends Component {

  userAuthentication() {
    const { email, password } = this.props;
    this.props.userAuthentication({ email, password });
  }

  renderButtonAccess() {
    if (this.props.loginLoading) {
      return (
        <ActivityIndicator size='large' />
      );
    }

    return (
      <Button
        title="Acessar"
        onPress={() => this.userAuthentication()}
        color='#115e54'
      />
    );
  }

  render() {
    return (
      <ImageBackground source={background} style={{ flex: 1, width: null }}>
        <View style={styles.main}>
          <View style={styles.title}>
            <Text style={styles.titleText}>Whatsapp Clone</Text>
          </View>
          <View style={styles.inputs}>
            <TextInput
              value={this.props.email}
              placeholder="E-mail"
              style={styles.inputsStyle}
              placeholderTextColor='#fff'
              onChangeText={email => this.props.emailChange(email)}
              keyboardType='email-address'
            />
            <TextInput
              value={this.props.password}
              placeholder="Senha"
              style={styles.inputsStyle}
              placeholderTextColor='#fff'
              onChangeText={password => this.props.passwordChange(password)}
              secureTextEntry

            />
            <Text style={{ color: 'red', fontSize: 18 }}>{this.props.loginError}</Text>
            <TouchableHighlight onPress={() => Actions.registerForm()}>
              <Text style={styles.inputsText}>Ainda não tem cadastro? Cadastre-se</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.button}>
            {this.renderButtonAccess()}
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 15
  },
  title: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 40,
    color: '#fff'
  },
  inputs: {
    flex: 4
  },
  inputsStyle: {
    fontSize: 20,
    height: 45
  },
  inputsText: {
    fontSize: 20,
    color: '#fff'
  },
  button: {
    flex: 2
  },
  buttonStyle: {
    color: '#115e54'
  }
});

const mapStateToProps = state => ({
  email: state.AutheticationReducer.email,
  password: state.AutheticationReducer.password,
  loginError: state.AutheticationReducer.loginError,
  loginLoading: state.AutheticationReducer.loginLoading
});

export default connect(mapStateToProps, {
  emailChange,
  passwordChange,
  userAuthentication
})(loginForm);
