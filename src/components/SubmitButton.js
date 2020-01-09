import React from 'react';
import { Text } from 'react-native';
import { Button } from 'native-base';

const SubmitButton = ({ text, handleSubmit }) => (
  <Button block info onPress={handleSubmit} style={{ marginBottom: 8 }}>
    <Text>{text}</Text>
  </Button>
);

export default SubmitButton;
