import React from 'react';
import { StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const GlucoseDirectionArrow = ({ twoLatestReadings }) => {
  let name = '';
  if (twoLatestReadings.length === 1) {
    name = 'arrow-right';
  } else {
    const last = twoLatestReadings[0];
    const secondLast = twoLatestReadings[1];
    name = iconName(secondLast, last);
  }
  return <Feather name={name} size={70} style={styles.arrow} />;
};

const iconName = (secondLast, last) => {
  if (secondLast > last) {
    return 'arrow-down';
  }
  if (secondLast === last) {
    return 'arrow-right';
  }
  return 'arrow-up';
};

const styles = StyleSheet.create({
  arrow: {
    textAlign: 'center',
    height: 60,
    color: '#FFFFFF',
  },
});

GlucoseDirectionArrow.propTypes = {
  twoLatestReadings: PropTypes.array.isRequired,
};

export default GlucoseDirectionArrow;
