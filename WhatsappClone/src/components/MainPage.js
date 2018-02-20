import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, SceneMap } from 'react-native-tab-view';

import TabBarMenu from './TabBarMenu';
import ConversationsPage from './ConversationsPage';
import ContactsPage from './ContactsPage';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

export default class MainPage extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Conversas' },
      { key: 'second', title: 'Contatos' },
    ],
  };

  handleIndexChange = index => this.setState({ index });

  renderHeader = props => <TabBarMenu {...props} />;

  renderScene = SceneMap({
    first: ConversationsPage,
    second: ContactsPage,
  });

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this.renderScene}
        renderHeader={this.renderHeader}
        onIndexChange={this.handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
