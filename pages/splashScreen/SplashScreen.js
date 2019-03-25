import React, { Component } from 'react';
import { View, Text, Animated, Image } from 'react-native';

//style
import styles from '../../styles/SplashScreen';
import HOC from '../../hoc/HOC';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(0)
    };
  }

  componentDidMount() {
    this.startAnimation();
    let timeout = setTimeout(() => {
      this.props.navigation.navigate('Intro');
    }, 1000);
  }

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: -300,
      duration: 1000,
      useNativeDriver: true
    }).start();
  };

  render() {
    const animationStyles = {
      transform: [
        {
          translateY: this.state.animation
        }
      ]
    };
    return (
      <View style={styles.container}>
        <Animated.Image
          source={require('../../assets/sallengo.png')}
          style={[styles.image, animationStyles]}
        />
      </View>
    );
  }
}

export default SplashScreen;
