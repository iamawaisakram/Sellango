import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

//icons
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

//style
import styles from '../../../styles/TabBar';

class Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={this.props.tabBar === 'Main' ? styles.cellActive : styles.cell}
          onPress={() => {
            this.props.changeTabBar('Main');
          }}
        >
          <Icon
            name="home"
            size={25}
            color={this.props.tabBar === 'Main' ? '#fff' : '#219DF5'}
            style={styles.cellIcon}
          />
          <Text
            style={
              this.props.tabBar === 'Main'
                ? styles.cellTextActive
                : styles.cellText
            }
          >
            Explore
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={this.props.tabBar === 'Chat' ? styles.cellActive : styles.cell}
          onPress={() => {
            this.props.changeTabBar('Chat');
          }}
        >
          <MaterialIcons
            name="chat"
            size={25}
            color={this.props.tabBar === 'Chat' ? '#fff' : '#219DF5'}
            style={styles.cellIcon}
          />
          <Text
            style={
              this.props.tabBar === 'Chat'
                ? styles.cellTextActive
                : styles.cellText
            }
          >
            Chat
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={this.props.tabBar === 'Sell' ? styles.cellActive : styles.cell}
          onPress={() => {
            this.props.changeTabBar('Sell');
          }}
        >
          <MCIcons
            name="camera-image"
            size={25}
            color={this.props.tabBar === 'Sell' ? '#fff' : '#219DF5'}
            style={styles.cellIcon}
          />
          <Text
            style={
              this.props.tabBar === 'Sell'
                ? styles.cellTextActive
                : styles.cellText
            }
          >
            Sell
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={this.props.tabBar === 'Ads' ? styles.cellActive : styles.cell}
          onPress={() => {
            this.props.changeTabBar('Ads');
          }}
        >
          <MCIcons
            name="file-document-box-multiple-outline"
            size={25}
            color={this.props.tabBar === 'Ads' ? '#fff' : '#219DF5'}
            style={styles.cellIcon}
          />
          <Text
            style={
              this.props.tabBar === 'Ads'
                ? styles.cellTextActive
                : styles.cellText
            }
          >
            My Ads
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            this.props.tabBar === 'Profile' ? styles.cellActive : styles.cell
          }
          onPress={() => {
            this.props.changeTabBar('Profile');
          }}
        >
          <AntDesignIcons
            name="user"
            size={25}
            color={this.props.tabBar === 'Profile' ? '#fff' : '#219DF5'}
            style={styles.cellIcon}
          />
          <Text
            style={
              this.props.tabBar === 'Profile'
                ? styles.cellTextActive
                : styles.cellText
            }
          >
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Bar;
