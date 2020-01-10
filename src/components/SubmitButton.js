import React from 'react';
import { Text } from 'react-native';
import { Button } from 'native-base';
import PropTypes from 'prop-types';

const SubmitButton = ({ text, handleSubmit }) => (
  <Button block info onPress={handleSubmit} style={{ marginBottom: 8 }}>
    <Text style={{ color: '#FFFFFF' }}>{text}</Text>
  </Button>
);

SubmitButton.propTypes = {
  text: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SubmitButton;
