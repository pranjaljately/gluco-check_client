import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

const FrequencyTabItem = ({ tab, selectedTabId, onPress }) => {
  return (
    <TouchableHighlight
      onPress={() => onPress(tab)}
      style={{
        alignItems: 'center',
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 0,
        paddingTop: 22,
        paddingBottom: 22,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        borderBottomColor: '#FF3A79',
        // border-radius: 30% / 100%;
        borderBottomWidth: selectedTabId === tab.id ? 2 : 0,
      }}
      activeOpacity={0.8}
      underlayColor='rgba(0, 0, 0, 0.3)'
    >
      <Text style={styles.tabText}>{tab.text}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  tabText: {
    color: '#FFFFFF',
    fontSize: 15,
    textTransform: 'uppercase',
  },
});
export default FrequencyTabItem;
