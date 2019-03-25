import React, { Component } from 'react';
import { View, Text, Modal, TouchableOpacity, TextInput } from 'react-native';

//Icon
import Icon from 'react-native-vector-icons/FontAwesome';

//style
import styles from '../../../styles/CreateAccount';

class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Modal visible={this.props.visible} animationType="slide">
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.modalCloseButton}
            onPress={() => {
              this.props.closeModal('email');
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
            <Text style={styles.subtitle}>Enter your Email Address</Text>
          </View>
          <View>
            <Text style={styles.description}>
              We will send a confirmation link to your email address
            </Text>
          </View>
          <View style={styles.inputView}>
            <View style={styles.emailView}>
              <Text style={styles.emailText}>Email</Text>
              <TextInput styles={styles.emailInput} />
            </View>
          </View>
          <View style={styles.button}>
            <Text style={styles.buttonText}>NEXT</Text>
          </View>
        </View>
      </Modal>
    );
  }
}

export default Email;
