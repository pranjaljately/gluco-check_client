import React from 'react';
import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const RefreshIcon = ({ onIconPress }) => (
  <FontAwesome.Button
    name='refresh'
    size={26}
    backgroundColor='transparent'
    iconStyle={styles.icon}
    onPress={() => onIconPress()}
    activeOpacity={0.7}
    underlayColor='rgba(0, 0, 0, 0)'
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
  onIconPress: PropTypes.func.isRequired,
};
export default RefreshIcon;
