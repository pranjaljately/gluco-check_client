import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>HomeScreen</Text>
//       </View>
//     );
//   }
// }

// class ProfileScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>ProfileScreen</Text>
//       </View>
//     );
//   }
// }

// class HistoryScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>HistoryScreen</Text>
//       </View>
//     );
//   }
// }

// class CartScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>CartScreen</Text>
//       </View>
//     );
//   }
// }

// const TabNavigator = createMaterialBottomTabNavigator(
//   {
//     Home: { screen: HomeScreen },
//     Profile: { screen: ProfileScreen },
//     History: { screen: HistoryScreen },
//     Cart: { screen: CartScreen },
//   },
//   {
//     initialRouteName: 'Home',
//     activeColor: '#f0edf6',
//     inactiveColor: '#694fad',
//     barStyle: { backgroundColor: '#000000' },
//     shifting: false,
//   }
// );

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// const App = createAppContainer(TabNavigator);

// export default () => (
//   <View style={{ flex: 1 }}>
//     <App theme='light' />
//   </View>
// );
