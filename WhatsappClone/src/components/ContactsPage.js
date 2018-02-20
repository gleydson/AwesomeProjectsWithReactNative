import React, { Component } from 'react';
import { View, Text, ListView, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';

import { contactUserFetch } from '../actions/AppActions';

class ContactsPage extends Component {

     componentWillMount() {
          this.props.contactUserFetch();
          this.createDataSource(this.props.contacts);
     }

     componentWillReceiveProps(nextProps) {
          this.createDataSource(nextProps.contacts);
     }

     createDataSource(contacts) {
          const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
          this.dataSource = ds.cloneWithRows(contacts);
     }

     renderRow(contact) {
          return (
               <TouchableHighlight
                    onPress={() => Actions.conversation({ 
                         title: contact.name, 
                         contactName: contact.name, 
                         contactEmail: contact.email 
                    })}
               >
                    <View
                         style={{
                              flex: 1,
                              padding: 20,
                              borderBottomWidth: 1,
                              borderBottomColor: '#ccc'
                         }}
                    >
                         <Text style={{ fontSize: 25 }}>{contact.name}</Text>
                         <Text style={{ fontSize: 18 }}>{contact.email}</Text>
                    </View>
               </TouchableHighlight>
          );
     }

     render() {
          return (
               <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
               />
          );
     }
}

const mapStateToProps = state => {
     const contacts = _.map(state.ListContactsReducer, (val, uid) => (
          { ...val, uid }
     ));
     return { contacts };
};

export default connect(mapStateToProps, { contactUserFetch })(ContactsPage);
