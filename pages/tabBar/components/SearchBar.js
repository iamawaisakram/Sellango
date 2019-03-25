import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

//icons
import IonIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';

//style
import styles from '../../../styles/TabBar';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.topBar}>
        <View style={styles.currentLocation}>
          <TouchableOpacity style={styles.pinView}>
            <FAIcon name="map-pin" size={20} color="#219DF5" />
            <Text style={styles.locationText}>CURRENT LOCATION</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.notificationView}>
            <FAIcon name="bell-o" size={20} color="#219DF5" />
          </TouchableOpacity>
        </View>
        <View style={styles.searchBar}>
          <IonIcon
            name="ios-search"
            size={25}
            color="#219DF5"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Find Cars, Mobile Phones and more.."
            placeholderTextColor="#219DF5"
          />
        </View>
      </View>
    );
  }
}

export default SearchBar;
