import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const Subheader = ({ text }) => (
  <View
    style={{
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFFFFF',
      alignSelf: 'center',
      flex: 1,
      marginLeft: 39,
    }}
  >
    <Text
      style={{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
      }}
    >
      {text}
    </Text>
  </View>
);

Subheader.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Subheader;
