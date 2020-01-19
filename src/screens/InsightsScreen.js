import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import TransparentHeader from '../components/TransparentHeader';
import FrequencyTabs from '../components/FrequencyTabs';
import InsightCardsSmall from '../components/InsightCardsSmall';
import InsightCardLong from '../components/InsightCardLong';
import Subheader from '../components/Subheader';
import CalendarIcon from '../components/CalendarIcon';
import getReadings from '../services/api/GetReadings';

const tabs = [
  {
    id: 'day',
    text: 'Daily',
    fromTimestampParam(date = moment()) {
      return moment(date)
        .startOf('day')
        .valueOf();
    },
    toTimestampParam(date = moment()) {
      return moment(date)
        .endOf('day')
        .valueOf();
    },
  },
  {
    id: 'isoWeek',
    text: 'Weekly',
    fromTimestampParam(date = moment()) {
      return moment(date)
        .startOf('isoWeek')
        .valueOf();
    },
    toTimestampParam(date = moment()) {
      return moment(date)
        .endOf('isoWeek')
        .valueOf();
    },
  },
  {
    id: 'month',
    text: 'Monthly',
    fromTimestampParam(date = moment()) {
      return moment(date)
        .startOf('month')
        .valueOf();
    },
    toTimestampParam(date = moment()) {
      return moment(date)
        .endOf('month')
        .valueOf();
    },
  },
  {
    id: 'year',
    text: 'Yearly',
    fromTimestampParam(date = moment()) {
      return moment(date)
        .startOf('year')
        .valueOf();
    },
    toTimestampParam(date = moment()) {
      return moment(date)
        .endOf('year')
        .valueOf();
    },
  },
];

const formatDate = date => moment(date).format('DD MMM YYYY');

const Insights = () => {
  const firstTab = tabs[0];
  const [selectedTab, setSelectedTab] = useState(firstTab);
  const [apiData, setApiData] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [formattedFromDate, setFormattedFromDate] = useState(
    formatDate(selectedTab.fromTimestampParam())
  );
  const [formattedToDate, setFormattedToDate] = useState(
    formatDate(selectedTab.toTimestampParam())
  );

  useEffect(() => {
    getReadingsData(
      selectedTab.fromTimestampParam(),
      selectedTab.toTimestampParam()
    );
  }, []);

  const getReadingsData = async (from, to) => {
    try {
      const res = await getReadings(from, to);
      setApiData(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const updateSelected = tab => {
    setSelectedTab(tab);

    getReadingsData(tab.fromTimestampParam(), tab.toTimestampParam());
    setFormattedFromDate(formatDate(tab.fromTimestampParam()));
    setFormattedToDate(formatDate(tab.toTimestampParam()));
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
    hideDatePicker();

    const from = selectedTab.fromTimestampParam(date);
    const to = selectedTab.toTimestampParam(date);

    setFormattedFromDate(formatDate(from));
    setFormattedToDate(formatDate(to));

    getReadingsData(from, to);
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
        <Subheader text={`${formattedFromDate} - ${formattedToDate}`} />
        <CalendarIcon onIconPress={showDatePicker} />
      </View>
      {apiData && (
        <View style={{ paddingHorizontal: '5%' }}>
          <InsightCardsSmall data={apiData} />
          <InsightCardLong
            title='BG Distribution'
            distribution={apiData.distribution}
          />
        </View>
      )}
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
