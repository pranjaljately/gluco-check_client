import React from 'react';
import { Text, StyleSheet } from 'react-native';

const GlucoseUnit = () => <Text style={styles.unit}>mmol/L</Text>;

const styles = StyleSheet.create({
  unit: {
    fontSize: 35,
    color: '#FFFFFF',
    height: 40,
    paddingTop: 4,
  },
});

export default GlucoseUnit;
