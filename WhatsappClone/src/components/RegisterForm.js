import React, { Component } from 'react';
import {
     View,
     TextInput,
     Button,
     StyleSheet,
     Text,
     ImageBackground,
     ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';

import {
     nameChange,
     emailChange,
     passwordChange,
     userRegister
} from '../actions/AutheticationActions';

const background = require('../images/bg.png');

class registerForm extends Component {

     userRegister() {
          const { name, email, password } = this.props;
          this.props.userRegister({ name, email, password });
     }

     renderButtonRegister() {
          if (this.props.registerLoading) {
               return (
                    <ActivityIndicator size='large' />
               );
          }
          
          return (
               <Button
                    color='#115e54'
                    title="Cadastrar"
                    onPress={() => this.userRegister()}
               />
          );
     }

     render() {
          return (
               <ImageBackground source={background} style={{ flex: 1, width: null }}>
                    <View style={styles.main}>
                         <View style={styles.inputs}>
                              <TextInput
                                   value={this.props.name}
                                   style={styles.inputsStyle}
                                   placeholder="Nome"
                                   onChangeText={name => this.props.nameChange(name)}
                                   placeholderTextColor='#fff'
                              />
                              <TextInput
                                   value={this.props.email}
                                   style={styles.inputsStyle}
                                   placeholder="E-mail"
                                   onChangeText={email => this.props.emailChange(email)}
                                   placeholderTextColor='#fff'
                                   keyboardType='email-address'
                              />
                              <TextInput
                                   value={this.props.password}
                                   style={styles.inputsStyle}
                                   placeholder="Senha"
                                   onChangeText={password => this.props.passwordChange(password)}
                                   secureTextEntry
                                   placeholderTextColor='#fff'
                              />
                              <Text style={styles.error}>{this.props.registerError}</Text>
                         </View>
                         <View style={styles.button}>
                              {this.renderButtonRegister()}
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
     inputs: {
          flex: 4,
          justifyContent: 'center'
     },
     inputsStyle: {
          fontSize: 20,
          height: 45
     },
     error: {
          color: 'red',
          fontSize: 18
     },
     button: {
          flex: 1
     }
});

const mapStateToProps = state => ({
     name: state.AutheticationReducer.name,
     email: state.AutheticationReducer.email,
     password: state.AutheticationReducer.password,
     registerError: state.AutheticationReducer.registerError,
     registerLoading: state.AutheticationReducer.registerLoading
});

export default connect(
     mapStateToProps,
     {
          nameChange,
          emailChange,
          passwordChange,
          userRegister
     }
)(registerForm);
