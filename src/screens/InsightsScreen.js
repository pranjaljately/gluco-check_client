import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import TransparentHeader from '../components/TransparentHeader';
import FrequencyTabs from '../components/FrequencyTabs';
import InsightCardsSmall from '../components/InsightCardsSmall';
import InsightCardLong from '../components/InsightCardLong';
import Subheader from '../components/Subheader';
import CalendarIcon from '../components/CalendarIcon';

const tabs = [
  {
    id: 'daily',
    text: 'Daily',
    fromTimestampParam() {
      return moment()
        .startOf('day')
        .valueOf();
    },
  },
  {
    id: 'weekly',
    text: 'Weekly',
    fromTimestampParam() {
      return moment()
        .startOf('isoWeek')
        .valueOf();
    },
  },
  {
    id: 'monthly',
    text: 'Monthly',
    fromTimestampParam() {
      return moment()
        .startOf('month')
        .valueOf();
    },
  },
  {
    id: 'yearly',
    text: 'Yearly',
    fromTimestampParam() {
      return moment()
        .startOf('year')
        .valueOf();
    },
  },
];

const cardsData = [
  {
    id: 'average',
    title: 'Avg glucose',
    value: '5.9',
    unit: 'mmol/L',
  },
  {
    id: 'A1C',
    title: 'Estimated A1C',
    value: '6.3',
    unit: '%',
  },
  {
    id: 'lowEventsCount',
    title: 'Low BG events',
    value: 4,
    unit: 'times',
  },
  {
    id: 'highEventsCount',
    title: 'High BG events',
    value: 10,
    unit: 'times',
  },
];

const longCardData = [
  {
    id: 'low',
    value: 10,
    unit: '% low',
  },
  {
    id: 'target',
    value: 65,
    unit: '% in target*',
  },
  {
    id: 'high',
    value: 10,
    unit: '% high',
  },
];

const Insights = () => {
  const firstTab = tabs[0];
  const [selectedTab, setSelectedTab] = useState(firstTab);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const updateSelected = tab => {
    setSelectedTab(tab);
  };

  const onFrequencyTabPress = tabId => {
    const tab = tabs.find(tab => tab.id === tabId);
    updateSelected(tab);
  };
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TransparentHeader title='Insights' />
      <FrequencyTabs
        tabs={tabs}
        selectedTabId={selectedTab.id}
        onFrequencyTabPress={onFrequencyTabPress}
      />
      <View style={styles.subContainer}>
        <Subheader text='23 Mon 2019 - 29 Sun 2019' />
        <CalendarIcon onIconPress={showDatePicker} />
      </View>
      <View style={{ paddingHorizontal: '5%' }}>
        <InsightCardsSmall data={cardsData} />
        <InsightCardLong title='BG Distribution' data={longCardData} />
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode='date'
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  subContainer: {
    marginTop: 7,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: '3%',
    paddingVertical: 8,
  },
});

export default Insights;
