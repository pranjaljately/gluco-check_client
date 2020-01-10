import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

const SignUpText = ({ navigation }) => (
  <Text
    style={{ fontSize: 14, color: '#D3D3D3' }}
    onPress={() => navigation.navigate('Register')}
  >
    Don't have an account?{' '}
    <Text style={{ fontSize: 15, color: '#FFFFFF', fontWeight: 'bold' }}>
      Sign Up.
    </Text>
  </Text>
);

SignUpText.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SignUpText;
