import React, { useState, useEffect } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, SafeAreaView } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import AlertSettingScreen from './screens/AlertSettingScreen';

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

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <AlertSettingScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
  },
});

export default App;
