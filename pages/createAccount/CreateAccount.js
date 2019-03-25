import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

//higher order component
import HOC from '../../hoc/HOC';

//Component
import Phone from './components/Phone';

//action
import { setTabBarScreen } from '../../actions/user';

//Icon
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

//style
import styles from '../../styles/CreateAccount';
import Email from './components/Email';

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneVisible: false,
      emailVisible: false
    };
  }

  setModalVisible(value) {
    if (value === 'phone') {
      this.setState({ phoneVisible: true });
    } else if (value === 'email') {
      this.setState({ emailVisible: true });
    }
  }

  setModalClose(value) {
    if (value === 'phone') {
      this.setState({ phoneVisible: false });
    } else if (value === 'email') {
      this.setState({ emailVisible: false });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => {
              this.props.setTabBarScreen('Main');
              this.props.navigation.navigate('TabBar');
            }}
          >
            <Icon name="window-close" size={30} color="#219DF5" />
          </TouchableOpacity>
          <Image
            source={require('../../assets/sallengo.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            onPress={() => {
              this.props.setTabBarScreen('Main');
              this.props.navigation.navigate('TabBar');
            }}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={['#219DF5', '#FF9300']}
              style={styles.optionsView}
            >
              <Icon style={styles.icon} name="google" size={30} color="#fff" />
              <Text style={styles.optionsFont}>CONTINUE WITH GOOGLE</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.setTabBarScreen('Main');
              this.props.navigation.navigate('TabBar');
            }}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={['#219DF5', '#FF9300']}
              style={styles.optionsView}
            >
              <Icon
                style={styles.icon}
                name="facebook"
                size={30}
                color="#fff"
              />
              <Text style={styles.optionsFont}>CONTINUE WITH FACEBOOK</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setModalVisible('phone');
            }}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={['#219DF5', '#FF9300']}
              style={styles.optionsView}
            >
              <MaterialIcon
                style={styles.icon}
                name="phone-iphone"
                size={30}
                color="#fff"
              />
              <Text style={styles.optionsFont}>CONTINUE WITH PHONE</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setModalVisible('email');
            }}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={['#219DF5', '#FF9300']}
              style={styles.optionsView}
            >
              <MaterialIcon
                style={styles.icon}
                name="email"
                size={30}
                color="#fff"
              />
              <Text style={styles.optionsFont}>CONTINUE WITH EMAIL</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <Phone
          visible={this.state.phoneVisible}
          closeModal={this.setModalClose.bind(this)}
        />
        <Email
          visible={this.state.emailVisible}
          closeModal={this.setModalClose.bind(this)}
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setTabBarScreen: value => dispatch(setTabBarScreen(value))
});

export default connect(
  null,
  mapDispatchToProps
)(CreateAccount);
