import React from 'react';
import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const RefreshIcon = ({ onUpdatedAtChange }) => (
  <FontAwesome.Button
    name='refresh'
    size={26}
    backgroundColor='transparent'
    iconStyle={styles.icon}
    onPress={() => onUpdatedAtChange()}
    activeOpacity={0.8}
    underlayColor='rgba(0, 0, 0, 0.1)'
  />
);

const styles = StyleSheet.create({
  icon: {
    marginRight: 0,
    paddingTop: 0,
    color: '#7CD225',
  },
});

RefreshIcon.propTypes = {
  onUpdatedAtChange: PropTypes.func.isRequired,
};
export default RefreshIcon;
