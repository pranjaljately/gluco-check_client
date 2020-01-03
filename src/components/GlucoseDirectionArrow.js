import React from 'react';
import { StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const GlucoseDirectionArrow = ({ twoLatestReadings }) => {
  let name = '';
  if (twoLatestReadings.length < 2) {
    name = 'arrow-right';
  } else {
    let secondLast = twoLatestReadings[0]['y'];
    let last = twoLatestReadings[1]['y'];
    name = iconName(secondLast, last);
  }
  return <Feather name={name} size={70} style={styles.arrow} />;
};

const iconName = (secondLast, last) => {
  if (secondLast > last) {
    return 'arrow-down';
  } else if (secondLast === last) {
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
