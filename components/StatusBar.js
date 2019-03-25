import React from 'react';
import { View, StatusBar } from 'react-native';

//style
import styles from '../styles/StatusBar';

export const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
