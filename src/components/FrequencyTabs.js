import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import FrequencyTabItem from './FrequencyTabItem';

const FrequencyTabs = ({ tabs, selectedTabId, onFrequencyTabPress }) => {
  const tabItems = tabs.map(tab => (
    <FrequencyTabItem
      key={tab.id}
      tab={tab}
      onFrequencyTabPress={onFrequencyTabPress}
      selectedTabId={selectedTabId}
    />
  ));

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 10,
        borderTopColor: 'rgba(0, 0, 0, 0.1)',
        borderTopWidth: 0.5,
      }}
    >
      {tabItems}
    </View>
  );
};

FrequencyTabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  selectedTabId: PropTypes.string.isRequired,
  onFrequencyTabPress: PropTypes.func.isRequired,
};

export default FrequencyTabs;
