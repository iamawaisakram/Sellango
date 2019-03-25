import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';

//Higher Order Component
import HOC from '../../hoc/HOC';

//components
import Main from './components/Main';
import Bar from './components/BottomBar';
import SearchBar from './components/SearchBar';

//action
import { setTabBarScreen } from '../../actions/user';

//style
import styles from '../../styles/TabBar';

class TabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  changeTabBar(value) {
    this.props.setTabBarScreen(value);
  }

  render() {
    return (
      <View style={styles.container}>
        <Main {...this.props} />
        <SearchBar {...this.props} />
        <Bar {...this.props} changeTabBar={this.changeTabBar.bind(this)} />
      </View>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    tabBar: user.tabBar
  };
};

const mapDispatchToProps = dispatch => ({
  setTabBarScreen: value => dispatch(setTabBarScreen(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HOC(TabBar));
