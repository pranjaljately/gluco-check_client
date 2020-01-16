import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import moment from 'moment';
import TransparentHeader from '../components/TransparentHeader';
import FrequencyTabs from '../components/FrequencyTabs';

const tabs = [
  {
    id: 'daily',
    text: 'Daily',
    fromTimestampParam() {
      return moment()
        .subtract(1, 'hours')
        .valueOf();
    },
  },
  {
    id: 'weekly',
    text: 'Weekly',
    fromTimestampParam() {
      return moment()
        .subtract(6, 'hours')
        .valueOf();
    },
  },
  {
    id: 'monthly',
    text: 'Monthly',
    fromTimestampParam() {
      return moment()
        .subtract(12, 'hours')
        .valueOf();
    },
  },
  {
    id: 'yearly',
    text: 'Yearly',
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
      <FrequencyTabs
        tabs={tabs}
        selectedTabId={selectedTab.id}
        onFrequencyTabPress={onFrequencyTabPress}
      />
      <View
        style={{
          padding: 10,
          marginTop: 7,
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#FFFFFF',
          }}
        >
          23 Mon 2019 - 29 Sun 2019
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          paddingHorizontal: '5%',
        }}
      >
        <View style={styles.card}>
          <View>
            <Text style={styles.cardTitle}>AVG GLUCOSE</Text>
          </View>
          <View>
            <Text style={{ fontSize: 55, color: '#FF3A79' }}>
              5.9<Text style={{ fontSize: 20, color: '#FFFFFF' }}>mmol/L</Text>
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View>
            <Text style={styles.cardTitle}>ESTIMATED A1C</Text>
          </View>
          <View>
            <Text style={{ fontSize: 60, color: '#FF3A79' }}>
              6.3<Text style={{ fontSize: 20, color: '#FFFFFF' }}>%</Text>
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View>
            <Text style={styles.cardTitle}>LOW BG EVENTS</Text>
          </View>
          <View>
            <Text style={{ fontSize: 60, color: '#FF3A79' }}>
              4<Text style={{ fontSize: 20, color: '#FFFFFF' }}>times</Text>
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View>
            <Text style={styles.cardTitle}>HIGH BG EVENTS</Text>
          </View>
          <View>
            <Text style={{ fontSize: 60, color: '#FF3A79' }}>
              10
              <Text
                style={{
                  fontSize: 20,
                  color: '#FFFFFF',
                }}
              >
                times
              </Text>
            </Text>
          </View>
        </View>
        <View style={[styles.card, styles.cardLong]}>
          <View>
            <Text style={styles.cardTitle}>BG DISTRIBUTION</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              paddingVertical: 10,
            }}
          >
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 60, color: '#FF3A79' }}>10</Text>
              <Text
                style={{
                  fontSize: 20,
                  color: '#FFFFFF',
                  letterSpacing: 2,
                }}
              >
                % LOW
              </Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 60, color: '#FF3A79' }}>65</Text>
              <Text
                style={{
                  fontSize: 20,
                  color: '#FFFFFF',
                  letterSpacing: 2,
                }}
              >
                % IN TARGET*
              </Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 60, color: '#FF3A79' }}>25</Text>
              <Text
                style={{
                  fontSize: 20,
                  color: '#FFFFFF',
                  letterSpacing: 2,
                }}
              >
                % HIGH
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  card: {
    backgroundColor: '#464646',
    alignItems: 'center',
    width: 180,
    borderRadius: 5,
    height: 125,
    marginVertical: 10,
    elevation: 10,
    paddingTop: 15,
    paddingBottom: 15,
    justifyContent: 'space-around',
  },
  cardLong: {
    width: '100%',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    height: 175,
  },
  cardTitle: { color: '#FFFFFF', fontSize: 20, letterSpacing: 2 },
});

export default Insights;
