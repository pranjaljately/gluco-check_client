import React from 'react';
import { Feather } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const CalendarIcon = ({ onIconPress }) => (
  <Feather.Button
    name='calendar'
    size={28}
    backgroundColor='transparent'
    iconStyle={styles.icon}
    onPress={onIconPress}
    activeOpacity={0.7}
    underlayColor='rgba(0, 0, 0, 0)'
  />
);

const styles = StyleSheet.create({
  icon: {
    marginRight: 0,
    paddingTop: 0,
    color: '#FF3A79',
  },
});

CalendarIcon.propTypes = {
  onIconPress: PropTypes.func.isRequired,
};

export default CalendarIcon;
