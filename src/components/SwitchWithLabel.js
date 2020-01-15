import React from 'react';
import { View, Switch, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import PrimaryBtn from './PrimaryBtn';

const SwitchWithLabel = ({ value, onSwitchPress, label }) => (
  <View style={styles.switchWrapper}>
    <PrimaryBtn text={label} />
    <Switch
      value={value}
      onValueChange={() => onSwitchPress()}
      trackColor={{
        true: '#FFFFFF',
      }}
      thumbColor={value ? '#FF3A79' : '#DFDFDF'}
    />
  </View>
);

const styles = StyleSheet.create({
  switchWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

SwitchWithLabel.propTypes = {
  value: PropTypes.bool.isRequired,
  onSwitchPress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
export default SwitchWithLabel;
