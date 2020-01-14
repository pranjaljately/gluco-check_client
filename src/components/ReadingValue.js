import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const ReadingValue = ({ latestReading }) => {
  const int = Math.floor(latestReading).toString();
  const decimal = (latestReading % 1).toFixed(1).replace(/^0+/, '');

  return (
    <View>
      <Text style={styles.readingVal}>
        {int}
        <Text style={{ fontSize: 60 }}>{decimal}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  readingVal: {
    color: '#FFFFFF',
    fontSize: 135,
  },
});

ReadingValue.propTypes = {
  latestReading: PropTypes.number.isRequired,
};

export default ReadingValue;
