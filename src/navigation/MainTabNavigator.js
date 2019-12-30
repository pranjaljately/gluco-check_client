import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>HomeScreen</Text>
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>ProfileScreen</Text>
      </View>
    );
  }
}

class HistoryScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>HistoryScreen</Text>
      </View>
    );
  }
}

class CartScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>CartScreen</Text>
      </View>
    );
  }
}

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
    History: { screen: HistoryScreen },
    Cart: { screen: CartScreen },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
  }
);

export default TabNavigator;
