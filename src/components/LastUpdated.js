import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const LastUpdated = ({ updatedAt }) => (
  <Text style={styles.updatedAt}>Updated {updatedAt}</Text>
);

const styles = StyleSheet.create({
  updatedAt: {
    color: '#FFFFFF',
    fontSize: 15,
  },
});

LastUpdated.propTypes = {
  updatedAt: PropTypes.string.isRequired,
};

export default LastUpdated;
