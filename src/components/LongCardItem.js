import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const LongCardItem = ({ card: { value, unit } }) => (
  <View style={styles.dataContainer}>
    <Text style={styles.value}>{value}</Text>
    <Text style={styles.distribution}>{unit}</Text>
  </View>
);

const styles = StyleSheet.create({
  dataContainer: { alignItems: 'center' },
  value: { fontSize: 60, color: '#FF3A79' },
  distribution: {
    fontSize: 19,
    color: '#FFFFFF',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
});

LongCardItem.propTypes = {
  card: PropTypes.object.isRequired,
};
export default LongCardItem;
