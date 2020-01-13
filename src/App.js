/* eslint-disable global-require */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import AlertSettingScreen from './screens/AlertSettingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import SettingsScreen from './screens/SettingsScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';

const styles = {
  auth: {
    flex: 1,
    backgroundColor: '#333333',
    width: '100%',
    paddingHorizontal: '3%',
  },
  label: {
    fontSize: 5,
    fontWeight: 'bold',
  },
};

const AppTabScreens = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name='home' style={{ color: tintColor }} size={26} />
        ),
      },
    },
    Alerts: {
      screen: AlertSettingScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons
            name='notifications'
            style={{ color: tintColor }}
            size={26}
          />
        ),
      },
    },
    Insights: {
      screen: AlertSettingScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons
            name='graphic-eq'
            style={{ color: tintColor }}
            size={26}
          />
        ),
      },
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons
            name='settings'
            style={{ color: tintColor }}
            size={26}
          />
        ),
      },
    },
    Profile: {
      screen: AlertSettingScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons
            name='account-circle'
            style={{ color: tintColor }}
            size={26}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    shifting: false,
    labeled: true,
    activeColor: '#FF3A79',
    inactiveColor: '#FFFFFF',
    barStyle: { backgroundColor: '#333333' },
    backBehavior: 'order',
  }
);

const AuthStack = createStackNavigator(
  {
    LogIn: {
      screen: LoginScreen,
    },
    Register: {
      screen: RegisterScreen,
    },
  },
  {
    headerMode: 'none',
    defaultNavigationOptions: {
      cardStyle: styles.auth,
    },
  }
);

const switchNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppTabScreens,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

const AppContainer = createAppContainer(switchNavigator);

const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const getFonts = async () => {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });
      setIsReady(true);
    };
    getFonts();
  }, []);

  if (!isReady) return <AppLoading />;

  return <AppContainer />;
};

export default App;
