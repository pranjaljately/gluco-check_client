import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import FrequencyTabItem from './FrequencyTabItem';

const FrequencyTabs = ({ tabs, selectedTab, updateSelected }) => {
  const makeApiCall = url => {
    alert(selectedTab);
  };
  const tabItems = tabs.map(tab => (
    <FrequencyTabItem
      key={tab.id}
      tab={tab}
      updateSelected={updateSelected}
      selectedTab={selectedTab}
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
  selectedTab: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  updateSelected: PropTypes.func.isRequired,
};

export default FrequencyTabs;
