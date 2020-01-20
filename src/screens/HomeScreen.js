import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Platform, SafeAreaView, Text } from 'react-native';
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
import getReadings from '../services/api/GetReadings';

const { manifest } = Constants;

const tabs = [
  {
    id: '1',
    text: '1 hour',
  },
  {
    id: '6',
    text: '6 hours',
  },
  {
    id: '12',
    text: '12 hours',
  },
  {
    id: '24',
    text: '24 hours',
  },
];

const calculateFromTimestamp = hoursToSubtract =>
  moment()
    .subtract(hoursToSubtract, 'hours')
    .valueOf();

const HomeScreen = () => {
  const firstTab = tabs[0];
  const [selectedTab, setSelectedTab] = useState(firstTab);
  const [apiData, setApiData] = useState();
  const [updatedAt, setUpdatedAt] = useState(moment().format('HH:mm'));
  const [fromTimestamp, setfromTimestamp] = useState(
    calculateFromTimestamp(selectedTab.id)
  );

  useEffect(() => {
    // createFakeApiData();
    getReadingsData(fromTimestamp);
    updateLastUpdated();
  }, [fromTimestamp]);

  const getReadingsData = async (from, to = moment().valueOf()) => {
    try {
      const data = await getReadings(from, to);
      setApiData(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  // const createFakeApiData = async () => {
  //   let startTimeStamp = moment()
  //     .subtract(24, 'hours')
  //     .valueOf();
  //   let endTimeStamp = moment()
  //     .endOf('day')
  //     .valueOf();

  //   while (startTimeStamp <= endTimeStamp) {
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
  //             'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMThhYzI0Njc3M2FhNjRkYzNiMjdlOCIsImlhdCI6MTU3OTAxNjg3MSwiZXhwIjoxNTg0MjAwODcxfQ.B-ATvM0pgFDIaNRhXoHeaNflDsIuGmtnqeh21tD8Myc',
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

  const updateSelected = tab => setSelectedTab(tab);

  const updateFromTime = time => setfromTimestamp(time);

  const updateLastUpdated = () => setUpdatedAt(moment().format('HH:mm'));

  const onIconPress = () =>
    updateFromTime(calculateFromTimestamp(selectedTab.id));

  const onFrequencyTabPress = tabId => {
    const tab = tabs.find(tab => tab.id === tabId);
    updateSelected(tab);
    const from = calculateFromTimestamp(tab.id);
    updateFromTime(from);
  };

  const getLatestTwoReadings = () => {
    if (apiData.readings[1]) {
      return [apiData.readings[0].value, apiData.readings[1].value];
    }
    return [apiData.readings[0].value];
  };

  return (
    <SafeAreaView style={styles.container}>
      {apiData && (
        <View style={{ paddingHorizontal: '3%' }}>
          <View style={styles.currentReading}>
            {apiData.readings[0] ? (
              <>
                <ReadingValue latestReading={apiData.readings[0].value} />
                <View>
                  <GlucoseDirectionArrow
                    twoLatestReadings={getLatestTwoReadings()}
                  />
                  <GlucoseUnit />
                </View>
              </>
            ) : (
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 40,
                }}
              >
                No reading found
              </Text>
            )}
          </View>
          <View style={styles.subContainer}>
            <RunningAverage average={apiData.data.average} />
            <View style={styles.subHeading}>
              <LastUpdated updatedAt={updatedAt} />
              <RefreshIcon onIconPress={onIconPress} />
            </View>
          </View>
          <GlucoseGraph readings={apiData.readings} />
        </View>
      )}
      <View style={{ marginVertical: 10 }}>
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
    paddingTop: Platform.OS === 'android' ? 45 : 0,
    flex: 1,
    backgroundColor: '#333333',
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
    height: 160,
  },
  subHeading: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default HomeScreen;
