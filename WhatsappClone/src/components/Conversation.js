import React, { Component } from 'react';
import { View, TextInput, TouchableHighlight, Image, ListView, Text } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import { messageChange, sendMessage, conversationUserFetch } from '../actions/AppActions';

class Conversation extends Component {

     componentWillMount() {
          this.props.conversationUserFetch(this.props.contactEmail);
          this.createDataSource(this.props.conversation);
     }

     componentWillReceiveProps(nextProps) {
          this.createDataSource(nextProps.conversation);
     }

     sendMessage() {
          const { message, contactName, contactEmail } = this.props;
          this.props.sendMessage({ message, contactName, contactEmail });
     }

     createDataSource(conversation) {
          const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
          this.dataSource = ds.cloneWithRows(conversation);
     }

     renderRow(text) {
          if (text.type === 'e') {
               return (
                    <View 
                         style={{ 
                              alignItems: 'flex-end', 
                              marginTop: 5, 
                              marginBottom: 5, 
                              marginLeft: 40 
                         }}
                    >
                         <Text
                              style={{
                                   fontSize: 18,
                                   color: 'black',
                                   padding: 10,
                                   backgroundColor: '#dbf5b4',
                                   elevation: 1
                              }}
                         >{text.message}</Text>
                    </View>
               );
          }
          return (
               <View
                    style={{ 
                         alignItems: 'flex-start', 
                         marginTop: 5, 
                         marginBottom: 5, 
                         marginRight: 40
                    }}
               >
                    <Text
                         style={{
                              fontSize: 18,
                              color: 'black',
                              padding: 10,
                              backgroundColor: '#f7f7f7',
                              elevation: 1
                         }}
                    >{text.message}</Text>
               </View>
          );
     }

     render() {
          return (
               <View style={{ flex: 1, backgroundColor: '#eee4dc', padding: 10 }}>
                    <View style={{ flex: 1, paddingBottom: 20 }}>
                         <ListView
                              enableEmptySections
                              dataSource={this.dataSource}
                              renderRow={this.renderRow}
                         />
                    </View>
                    <View style={{ flexDirection: 'row', height: 60 }}>
                         <TextInput
                              value={this.props.message}
                              onChangeText={message => this.props.messageChange(message)}
                              style={{ flex: 4, backgroundColor: '#fff', fontSize: 18 }}
                         />
                         <TouchableHighlight
                              onPress={this.sendMessage.bind(this)}
                              underlayColor='#fff'
                         >
                              <Image source={require('../images/enviar_mensagem.png')} />
                         </TouchableHighlight>
                    </View>
               </View>
          );
     }
}

const mapStateToProps = state => {
     const conversation = _.map(state.ListConversationReducer, (val, uid) => ({ ...val, uid }));
     return ({
          conversation,
          message: state.AppReducer.message
     });
};

export default connect(mapStateToProps, {
     messageChange, 
     sendMessage, 
     conversationUserFetch
})(Conversation);
