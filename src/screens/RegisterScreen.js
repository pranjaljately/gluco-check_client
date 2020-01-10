import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Text,
} from 'react-native';
import RegisterForm from '../components/RegisterForm';

const RegisterScreen = () => (
  <SafeAreaView style={styles.container}>
    <KeyboardAvoidingView style={styles.keyboardAreaView} behavior='padding'>
      <View style={styles.logo}>
        <Text style={styles.logoText}>Register</Text>
      </View>
      <RegisterForm />
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
  logo: { alignItems: 'center' },
  logoText: { fontSize: 40, color: '#FFFFFF', fontWeight: '600' },
  signUp: {
    alignItems: 'center',
  },
});
export default RegisterScreen;
