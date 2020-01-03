import React, { useEffect } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import FrequencyTabItem from './FrequencyTabItem';

const FrequencyTabs = ({ tabs, selectedTabId, updateSelected }) => {
  console.log(selectedTabId);
  useEffect(() => {
    makeApiCall(selectedTabId);
  }, [selectedTabId]);

  const onPress = tab => {
    updateSelected(tab.id);
  };

  const makeApiCall = url => {
    alert(selectedTabId);
  };
  const tabItems = tabs.map(tab => (
    <FrequencyTabItem
      key={tab.id}
      tab={tab}
      onPress={onPress}
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
      }}
    >
      {tabItems}
    </View>
  );
};

FrequencyTabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  selectedTabId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  updateSelected: PropTypes.func.isRequired,
};

export default FrequencyTabs;
