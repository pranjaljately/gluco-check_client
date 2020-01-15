import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const PrimaryBtn = ({ text, onPress }) => (
  <View style={styles.buttonWrapper}>
    <Text style={styles.buttonText} onPress={onPress}>
      {text}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  buttonWrapper: {
    paddingVertical: 12,
  },
  buttonText: { fontSize: 20, color: '#FFFFFF' },
});

PrimaryBtn.defaultProps = {
  onPress: () => {},
};

PrimaryBtn.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

export default PrimaryBtn;
