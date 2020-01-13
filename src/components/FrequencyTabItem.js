import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';
import PropTypes from 'prop-types';

const FrequencyTabItem = ({ tab, selectedTabId, onFrequencyTabPress }) => (
  <TouchableRipple
    onPress={() => onFrequencyTabPress(tab.id)}
    style={{
      alignItems: 'center',
      flexGrow: 1,
      flexShrink: 0,
      flexBasis: 0,
      paddingVertical: 18,
      borderTopStartRadius: 10,
      borderTopEndRadius: 10,
      borderBottomColor: '#FF3A79',
      borderBottomWidth: selectedTabId === tab.id ? 2 : 0,
    }}
    rippleColor='rgba(255, 58, 121, 0.2)'
  >
    <Text style={styles.tabText}>{tab.text}</Text>
  </TouchableRipple>
);

const styles = StyleSheet.create({
  tabText: {
    color: '#FFFFFF',
    fontSize: 14,
    textTransform: 'uppercase',
  },
});

FrequencyTabItem.propTypes = {
  tab: PropTypes.object.isRequired,
  onFrequencyTabPress: PropTypes.func.isRequired,
  selectedTabId: PropTypes.string.isRequired,
};
export default FrequencyTabItem;
