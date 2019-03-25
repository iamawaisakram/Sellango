import React, { Component } from 'react';
import { View, Text, Modal, TouchableOpacity, TextInput } from 'react-native';

//Icon
import Icon from 'react-native-vector-icons/FontAwesome';

//style
import styles from '../../../styles/CreateAccount';

class Phone extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Modal visible={this.props.visible} animationType="slide">
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => {
                this.props.closeModal('phone');
              }}
            >
              <Icon name="window-close" size={30} color="#219DF5" />
            </TouchableOpacity>
            <View>
              <Text style={styles.title}>LOGIN</Text>
            </View>
            <View style={styles.userIcon}>
              <Icon name="user-circle-o" size={90} color="#219DF5" />
            </View>
            <View>
              <Text style={styles.subtitle}>Enter your phone</Text>
            </View>
            <View>
              <Text style={styles.description}>
                We will send a confirmation code to your phone
              </Text>
            </View>
            <View style={styles.inputView}>
              <View style={styles.countryCode}>
                <Text style={styles.countryText}>Country</Text>
                <TextInput styles={styles.countryInput} />
              </View>
              <View style={styles.phoneNumber}>
                <Text style={styles.numberText}>Phone Number</Text>
                <TextInput styles={styles.numberInput} />
              </View>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.closeModal('phone');
              }}
            >
              <Text style={styles.buttonText}>NEXT</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

export default Phone;
