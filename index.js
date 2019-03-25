/** @format */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

import React, { Component } from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation';
import { Provider } from 'react-redux';

//store
import store from './store/index';

//Intro for the Application
import Intro from './pages/intro/Intro';

//Splash Screen
import SplashScreen from './pages/splashScreen/SplashScreen';

//Create account Screen
import CreateAccount from './pages/createAccount/CreateAccount';

//TabBar Screen
import TabBar from './pages/tabBar/TabBar';

//Disable Yellow Warnings
console.disableYellowBox = true;
console.warn('YellowBox is disabled.');

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => App);

const IntroStack = createSwitchNavigator(
  {
    SplashScreen: SplashScreen,
    Intro
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none'
  }
);

const accountStack = createSwitchNavigator(
  {
    IntroStack,
    CreateAccount
  },
  {
    initialRouteName: 'IntroStack',
    headerMode: 'none'
  }
);

const AppStack = createSwitchNavigator(
  {
    TabBar,
    accountStack
  },
  {
    initialRouteName: 'accountStack',
    headerMode: 'none'
  }
);

const RootStack = createAppContainer(AppStack);
