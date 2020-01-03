import React from 'react';
import {
  TouchableHighlight,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

const FrequencyTabItem = ({ tab, selectedTab, updateSelected }) => {
  return (
    <TouchableHighlight
      onPress={() => updateSelected(tab.id)}
      style={{
        alignItems: 'center',
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 0,
        marginTop: 5,
        paddingTop: 17,
        paddingBottom: 17,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        borderBottomColor: '#FF3A79',
        // border-radius: 30% / 100%;
        borderBottomWidth: selectedTab === tab.id ? 2 : 0,
      }}
      activeOpacity={0.8}
      underlayColor={
        selectedTab === tab.id
          ? 'rgba(255, 58, 121, 0.3)'
          : 'rgba(0, 0, 0, 0.3)'
      }
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

FrequencyTabItem.propTypes = {
  tab: PropTypes.object.isRequired,
  updateSelected: PropTypes.func.isRequired,
  selectedTab: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default FrequencyTabItem;
