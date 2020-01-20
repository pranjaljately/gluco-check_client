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
  },
  {
    id: 'isoWeek',
    text: 'Weekly',
  },
  {
    id: 'month',
    text: 'Monthly',
  },
  {
    id: 'year',
    text: 'Yearly',
  },
];

const formatDate = date => moment(date).format('DD MMM YYYY');

const InsightsScreen = () => {
  const firstTab = tabs[0];
  const [selectedTab, setSelectedTab] = useState(firstTab);
  const [apiData, setApiData] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(moment().valueOf());

  useEffect(() => {
    const from = extractFromDate(selectedDate);
    const to = extractToDate(selectedDate);
    getReadingsData(from, to);
  }, [selectedDate]);

  const extractFromDate = date =>
    moment(date)
      .startOf(selectedTab.id)
      .valueOf();

  const extractToDate = date =>
    moment(date)
      .endOf(selectedTab.id)
      .valueOf();

  const formattedFromDate = formatDate(extractFromDate(selectedDate));
  const formattedToDate = formatDate(extractToDate(selectedDate));

  const getReadingsData = async (from, to) => {
    try {
      const res = await getReadings(from, to);
      setApiData(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const updateSelectedTab = tab => {
    setSelectedTab(tab);
  };

  const onFrequencyTabPress = tabId => {
    const tab = tabs.find(tab => tab.id === tabId);
    updateSelectedTab(tab);
    updateSelectedDate(moment().valueOf());
  };

  const updateSelectedDate = date => {
    setSelectedDate(date);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    hideDatePicker();
    setSelectedDate(date);
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
        date={new Date(selectedDate)}
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

export default InsightsScreen;
