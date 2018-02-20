import React, { Component } from 'react';
import { View, Text, StatusBar, Image, TouchableHighlight } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { habilityContactAdd } from '../actions/AppActions';

const contactsAddImage = require('../images/contactAdd.png');

class TabBarMenu extends Component {
     render() {
          return (
               <View style={{ backgroundColor: '#115e54', elevation: 4, marginBottom: 6 }}>
                    <StatusBar backgroundColor='#114d44' />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                         <View style={{ height: 50, justifyContent: 'center' }}>
                              <Text
                                   style={{
                                        color: '#fff',
                                        fontSize: 20, 
                                        marginLeft: 20 
                                   }}
                              >Whatsapp Clone</Text>
                         </View>
                         <View style={{ flexDirection: 'row', marginRight: 20 }}>
                              <View
                                   style={{
                                        marginRight: 25, 
                                        justifyContent: 'center', 
                                        alignItems: 'center' 
                                   }}
                              >
                                   <TouchableHighlight
                                        onPress={() => {
                                             this.props.habilityContactAdd();
                                             Actions.contactAdd();
                                        }}
                                        underlayColor='#114d44'
                                   >
                                        <Image source={contactsAddImage} />
                                   </TouchableHighlight>
                              </View>
                              <View style={{ justifyContent: 'center' }}>
                                   <Text style={{ color: '#fff', fontSize: 20 }}>Sair</Text>
                              </View>
                         </View>
                    </View>
                    <TabBar {...this.props} style={{ backgroundColor: '#115e54', elevation: 0 }} /> 
               </View>
          );
     }
}

export default connect(null, {
     habilityContactAdd
})(TabBarMenu);
