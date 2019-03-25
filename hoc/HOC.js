import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

//status Bar
import { MyStatusBar } from '../components/StatusBar';

//style
import styles from '../styles/HOC';

const HOC = (WrappedComponent, props) => {
  return class HOC extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
      return (
        <View style={styles.container}>
          <MyStatusBar backgroundColor="#219DF5" barStyle="light-content" />
          <WrappedComponent {...this.props} />
        </View>
      );
    }
  };
};

export default HOC;
