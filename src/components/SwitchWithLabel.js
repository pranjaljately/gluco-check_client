import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const SwitchWithLabel = ({ value, onSwitchPress, label }) => (
  <View style={styles.switchWrapper}>
    <View>
      <Text style={styles.label}>{label}</Text>
    </View>
    <View>
      <Switch
        value={value}
        onValueChange={() => onSwitchPress()}
        trackColor={{
          true: '#FFFFFF',
        }}
        thumbColor={value ? '#FF3A79' : '#DFDFDF'}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  switchWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  label: { fontSize: 20, color: '#FFFFFF' },
});

SwitchWithLabel.propTypes = {
  value: PropTypes.bool.isRequired,
  onSwitchPress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
export default SwitchWithLabel;
