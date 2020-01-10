import React, { useState, useEffect } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import AlertSettingScreen from './screens/AlertSettingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#333333',
    width: '100%',
    paddingHorizontal: '3%',
  },
};

const AppStack = createStackNavigator(
  { Home: AlertSettingScreen },
  {
    headerMode: 'none',
    defaultNavigationOptions: {
      cardStyle: styles.container,
    },
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
      cardStyle: styles.container,
    },
  }
);

const switchNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
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
