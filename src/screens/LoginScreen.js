import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';
import SplashLogo from '../components/SplashLogo';
import SignUpText from '../components/SignUpText';

const LoginScreen = ({ navigation }) => (
  <SafeAreaView>
    <KeyboardAvoidingView style={styles.keyboardAreaView} behavior='padding'>
      <View style={styles.logo}>
        <SplashLogo />
      </View>
      <LoginForm navigation={navigation} />
      <View style={styles.signUp}>
        <SignUpText navigation={navigation} />
      </View>
    </KeyboardAvoidingView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  keyboardAreaView: {
    height: '100%',
    justifyContent: 'center',
  },
  logo: { alignItems: 'center', marginBottom: 7 },
  signUp: {
    alignItems: 'center',
  },
});

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default LoginScreen;
