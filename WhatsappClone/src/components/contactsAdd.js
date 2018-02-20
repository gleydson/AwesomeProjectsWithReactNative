import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';

import { contactAddEmailChange, contactAdd } from '../actions/AppActions';

class ContactsAdd extends Component {

     renderContactAdd() {
          if (!this.props.contactAddEmailResult) {
               return (
                    <View style={{ flex: 1 }}>
                         <View style={{ flex: 1, justifyContent: 'center' }}>
                              <TextInput
                                   placeholder='E-mail'
                                   style={{ fontSize: 20, height: 45 }}
                                   onChangeText={email => this.props.contactAddEmailChange(email)}
                                   value={this.props.contactAddEmail}
                              />
                         </View>
                         <View style={{ flex: 1 }}>
                              <Button
                                   color='#114d44'
                                   title='Adiconar Contato'
                                   onPress={() => this.props.contactAdd(this.props.contactAddEmail)}
                              />
                              <Text style={{ color: 'red', fontSize: 20 }}>
                                   {this.props.contactAddEmailError}
                              </Text>
                         </View>
                    </View>
               );
          }
          return (
               <View>
                    <Text style={{ fontSize: 20 }}>
                         Cadastro realizado com sucesso!
                    </Text>
               </View>
          );
     }

     render() {
          return (
               <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
                    {this.renderContactAdd()}     
               </View>
          );
     }
}

const mapStateToProps = state => (
     {
          contactAddEmail: state.AppReducer.contactAddEmail,
          contactAddEmailError: state.AppReducer.contactAddEmailError,
          contactAddEmailResult: state.AppReducer.contactAddEmailResult
     }
);

export default connect(mapStateToProps, {
     contactAddEmailChange,
     contactAdd
})(ContactsAdd);
