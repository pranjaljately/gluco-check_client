import React from 'react';
import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const RefreshIcon = () => (
  <FontAwesome.Button
    name='refresh'
    size={26}
    backgroundColor='transparent'
    iconStyle={styles.icon}
    onPress={() => alert('test')}
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
export default RefreshIcon;
