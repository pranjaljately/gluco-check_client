import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const LastUpdated = ({ updatedAt }) => {
  console.log(updatedAt);
  return <Text style={styles.updatedAt}>2 minutes ago</Text>;
};

const styles = StyleSheet.create({
  updatedAt: {
    color: '#FFFFFF',
    fontSize: 15,
    textTransform: 'uppercase',
  },
});
LastUpdated.propTypes = {
  updatedAt: PropTypes.object.isRequired,
};
export default LastUpdated;
