import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Platform, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import moment from 'moment';
import ReadingValue from '../components/ReadingValue';
import GlucoseDirectionArrow from '../components/GlucoseDirectionArrow';
import GlucoseUnit from '../components/GlucoseUnit';
import RunningAverage from '../components/RunningAverage';
import LastUpdated from '../components/LastUpdated';
import RefreshIcon from '../components/RefreshIcon';
import GlucoseGraph from '../components/GlucoseGraph';
import FrequencyTabs from '../components/FrequencyTabs';

const { manifest } = Constants;

const mockData = [
  { x: 1200, y: 2.9 },
  { x: 1215, y: 3.1 },
  { x: 1230, y: 3.2 },
  { x: 1245, y: 3.4 },
  { x: 1300, y: 3.1 },
  { x: 1315, y: 3.3 },
  { x: 1330, y: 3.0 },
  { x: 1345, y: 5.8 },
  { x: 1400, y: 9.3 },
  { x: 1415, y: 7.8 },
  { x: 1430, y: 5.7 },
  { x: 1445, y: 2.8 },
  { x: 1500, y: 3 },
  { x: 1515, y: 3.3 },
  { x: 1530, y: 4.2 },
  { x: 1545, y: 3.7 },
  { x: 1600, y: 3.1 },
  { x: 1615, y: 3.8 },
  { x: 1630, y: 5.7 },
  { x: 1645, y: 7.4 },
  { x: 1700, y: 4.9 },
  { x: 1715, y: 4.7 },
  { x: 1730, y: 4.0 },
  { x: 1745, y: 3.2 },
  { x: 1800, y: 4.1 },
];

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

const HomeScreen = () => {
  const firstTab = tabs[0];
  const [selectedTab, setSelectedTab] = useState(firstTab);
  const [apiData, setApiData] = useState();
  const [updatedAt, setUpdatedAt] = useState(moment().format('HH:mm'));

  useEffect(() => {
    getReadings(selectedTab.fromTimestampParam());
  }, []);

  const getReadings = async (from, to = moment().valueOf()) => {
    try {
      let params = '';

      if (from) {
        params = `${from}-${to}`;
      }

      const uri = `http://${manifest.debuggerHost
        .split(':')
        .shift()}:5000/api/v1/reading/${params}`;
      const res = await fetch(`${uri}`, {
        method: 'GET',
        headers: {
          'x-auth-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZmQ1MWQ5ZWRjODYxMTI3NDQxMzhkZiIsImlhdCI6MTU3Njg4MjY1MCwiZXhwIjoxNTgyMDY2NjUwfQ.P8vkuvUl8_Ry9EQBG9a1TUGWonlzCD6WkZRDymjjs68',
        },
        'Content-Type': 'application/json',
      });
      const data = await res.json();
      setApiData(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  // const createFakeApiData = async () => {
  //   let startTimeStamp = 1578273306000;
  //   let endTimeStamp = 1578355200000;

  //   while (startTimeStamp < endTimeStamp) {
  //     let reading = (Math.random() * (15 - 0.1) + 0.1).toFixed(1);
  //     let momentObj = moment(startTimeStamp);

  //     let postData = {
  //       value: reading,
  //       readingTime: momentObj.valueOf(),
  //     };
  //     console.log('TCL: createFakeApiData -> postData', postData);

  //     try {
  //       const uri = `http://${manifest.debuggerHost
  //         .split(':')
  //         .shift()}:5000/api/v1/reading/`;
  //       const res = await fetch(`${uri}`, {
  //         method: 'POST',
  //         headers: {
  //           'x-auth-token':
  //             'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZmQ1MWQ5ZWRjODYxMTI3NDQxMzhkZiIsImlhdCI6MTU3Njg4MjY1MCwiZXhwIjoxNTgyMDY2NjUwfQ.P8vkuvUl8_Ry9EQBG9a1TUGWonlzCD6WkZRDymjjs68',
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(postData),
  //       });
  //       const data = await res.json();
  //       console.log('TCL: createFakeApiData -> data', data);
  //     } catch (e) {
  //       console.log(e.message);
  //     }

  //     startTimeStamp = moment(momentObj)
  //       .add(15, 'm')
  //       .valueOf();
  //   }
  // };

  const updateSelected = tab => {
    setSelectedTab(tab);
  };

  const updateLastUpdated = () => {
    setUpdatedAt(moment().format('HH:mm'));
  };

  const onIconPress = () => {
    getReadings(selectedTab.fromTimestampParam());
    updateLastUpdated();
    // createFakeApiData();
  };

  const onFrequencyTabPress = tabId => {
    const tab = tabs.find(tab => tab.id === tabId);
    updateSelected(tab);
    getReadings(tab.fromTimestampParam());
    updateLastUpdated();
  };

  const getLatestTwoReadings = () => [
    apiData.readings[0].value,
    apiData.readings[1].value,
  ];

  return (
    <SafeAreaView style={styles.container}>
      {apiData && (
        <View style={{ paddingHorizontal: '3%' }}>
          <View style={styles.currentReading}>
            <ReadingValue latestReading={apiData.readings[0].value} />
            <View>
              <GlucoseDirectionArrow
                twoLatestReadings={getLatestTwoReadings()}
              />
              <GlucoseUnit />
            </View>
          </View>
          <View style={styles.subContainer}>
            <RunningAverage average={apiData.data.average} />
            <View style={styles.subHeading}>
              <LastUpdated updatedAt={updatedAt} />
              <RefreshIcon onIconPress={onIconPress} />
            </View>
          </View>
          <View>
            <GlucoseGraph mockData={mockData} readings={apiData.readings} />
          </View>
        </View>
      )}
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
    width: '100%',
    paddingTop: Platform.OS === 'android' ? 45 : 0,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  currentReading: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  subHeading: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default HomeScreen;
