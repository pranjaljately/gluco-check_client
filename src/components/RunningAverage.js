import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const RunningAverage = ({ average }) => (
  <View>
    <Text style={styles.average}>Avg: {average} mmol/L</Text>
  </View>
);

const styles = StyleSheet.create({
  average: {
    color: '#FFFFFF',
    fontSize: 25,
  },
});

RunningAverage.propType = {
  average: PropTypes.number.isRequired,
};

export default RunningAverage;
