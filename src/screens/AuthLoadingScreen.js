import React, { useEffect } from 'react';
import { View, ActivityIndicator, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import SetAuthToken from '../services/SetAuthToken';

const AuthLoadingScreen = ({ navigation }) => {
  useEffect(() => {
    const bootstrapAsync = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        SetAuthToken(token);
      }
      navigation.navigate(token ? 'App' : 'Auth');
    };
    bootstrapAsync();
  });

  return (
    <View>
      <ActivityIndicator />
    </View>
  );
};

AuthLoadingScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default AuthLoadingScreen;
