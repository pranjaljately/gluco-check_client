import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Description = ({ text }) => (
  <Text style={styles.description}>{text}</Text>
);

const styles = StyleSheet.create({
  description: {
    fontSize: 15,
    color: '#FFFFFF',
    opacity: 0.5,
  },
});

Description.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Description;
