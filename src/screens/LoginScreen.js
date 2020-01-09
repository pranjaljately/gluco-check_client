import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import LoginForm from '../components/LoginForm';
import SplashLogo from '../components/SplashLogo';
import SignUpText from '../components/SignUpText';

const LoginScreen = () => (
  <SafeAreaView style={styles.container}>
    <KeyboardAvoidingView style={styles.keyboardAreaView} behavior='padding'>
      <View style={styles.logo}>
        <SplashLogo />
      </View>
      <LoginForm />
      <View style={styles.signUp}>
        <SignUpText />
      </View>
    </KeyboardAvoidingView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: '3%',
  },
  keyboardAreaView: {
    height: '100%',
    justifyContent: 'center',
  },
  logo: { alignItems: 'center', marginBottom: 7 },
  signUp: {
    alignItems: 'center',
  },
});

export default LoginScreen;
