import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import moment from 'moment';
import TransparentHeader from '../components/TransparentHeader';
import FrequencyTabs from '../components/FrequencyTabs';

const tabs = [
  {
    id: '1hours',
    text: '1 hour',
    fromTimestampParam() {
      return moment()
        .subtract(1, 'hours')
        .valueOf();
    },
  },
  {
    id: '6hours',
    text: '6 hours',
    fromTimestampParam() {
      return moment()
        .subtract(6, 'hours')
        .valueOf();
    },
  },
  {
    id: '12hours',
    text: '12 hours',
    fromTimestampParam() {
      return moment()
        .subtract(12, 'hours')
        .valueOf();
    },
  },
  {
    id: '24hours',
    text: '24 hours',
    fromTimestampParam() {
      return moment()
        .subtract(24, 'hours')
        .valueOf();
    },
  },
];

const Insights = () => {
  const firstTab = tabs[0];
  const [selectedTab, setSelectedTab] = useState(firstTab);

  const updateSelected = tab => {
    setSelectedTab(tab);
  };

  const onFrequencyTabPress = tabId => {
    const tab = tabs.find(tab => tab.id === tabId);
    updateSelected(tab);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TransparentHeader title='Insights' />
      <View>
        <FrequencyTabs
          tabs={tabs}
          selectedTabId={selectedTab.id}
          onFrequencyTabPress={onFrequencyTabPress}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
});

export default Insights;
