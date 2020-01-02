import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const ReadingValue = ({ latestReading }) => {
  const splitValueArr = latestReading.toString().split('.');
  return (
    <View>
      <Text style={styles.readingVal}>
        {splitValueArr[0]}
        <Text style={{ fontSize: 60 }}>.{splitValueArr[1]}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  readingVal: {
    color: '#FFFFFF',
    fontSize: 140,
  },
});

ReadingValue.propTypes = {
  latestReading: PropTypes.number.isRequired,
};

export default ReadingValue;
