import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import RegisterForm from '../components/RegisterForm';

const RegisterScreen = ({ navigation }) => (
  <SafeAreaView>
    <KeyboardAvoidingView style={styles.keyboardAreaView} behavior='padding'>
      <View style={styles.logo}>
        <Text style={styles.logoText}>Register</Text>
      </View>
      <RegisterForm navigation={navigation} />
    </KeyboardAvoidingView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
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

RegisterScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default RegisterScreen;
