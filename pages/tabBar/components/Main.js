import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

//style
import styles from '../../../styles/TabBar';
import { MainComponentCategories } from './MainComponentCategories';
import { TopPicks } from './TopPicks';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.ScrollView}>
        <ScrollView
          // style={styles.ScrollView}
          contentContainerStyle={styles.mainContainer}
        >
          <MainComponentCategories {...this.props} />

          <TopPicks />
        </ScrollView>
      </View>
    );
  }
}

export default Main;
