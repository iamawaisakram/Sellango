import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';

//Higher Order Component
import HOC from '../../hoc/HOC';

//store Action
import { setUser, setModalValue } from '../../actions/user';

//style
import styles from '../../styles/Intro';

class Intro extends Component {
  constructor() {
    super();
    this.state = {
      index: 0
    };
  }

  componentDidMount() {
    this.props.setUser({ name: 'Awais', password: '******' });
  }

  changeIndex(key, value) {
    if (key === 'add' && value < 2) {
      this.setState({ index: value + 1 });
    }

    if (key === 'minus' && value > 0) {
      this.setState({ index: value - 1 });
    }

    if (key === 'change') {
      this.setState({ index: value });
    }
  }

  done() {
    return (
      <TouchableOpacity
        style={styles.nextView}
        onPress={() => {
          this.props.navigation.navigate('CreateAccount');
        }}
      >
        <Text style={styles.nextText}>Done</Text>
      </TouchableOpacity>
    );
  }

  next() {
    return (
      <TouchableOpacity
        style={styles.nextView}
        onPress={() => {
          this.changeIndex('add', this.state.index);
        }}
      >
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    );
  }

  previous() {
    return (
      <TouchableOpacity
        style={styles.backView}
        onPress={() => {
          this.changeIndex('minus', this.state.index);
        }}
      >
        <Text style={styles.backText}>Previous</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <Swiper
        loop={false}
        index={this.state.index}
        onIndexChanged={index => {
          this.changeIndex('change', index);
        }}
      >
        {[...Array(3)].map((_, i) => {
          return (
            <LinearGradient
              colors={['#219DF5', '#FF9300']}
              style={styles.container}
              key={i}
            >
              <TouchableOpacity
                style={styles.skipView}
                onPress={() => {
                  this.props.navigation.navigate('CreateAccount');
                }}
              >
                <Text style={styles.skipText}>Skip</Text>
              </TouchableOpacity>
              <Image
                source={require('../../assets/ReactNativeFirebase.png')}
                style={[styles.logo]}
              />
              {this.state.index > 0 && this.previous()}
              {this.state.index < 2 && this.next()}
              {this.state.index === 2 && this.done()}
            </LinearGradient>
          );
        })}
      </Swiper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user)),
  setModalValue: value => dispatch(setModalValue(value))
});

export default connect(
  null,
  mapDispatchToProps
)(HOC(Intro));
