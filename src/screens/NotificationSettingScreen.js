import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import TransparentHeader from '../components/TransparentHeader';
import SwitchWithLabel from '../components/SwitchWithLabel';

const NotificationSettingScreen = () => {
  const [lowNotification, setLowNotification] = useState(true);
  const [highNotification, setHighNotification] = useState(true);

  const onLowToggle = () => setLowNotification(!lowNotification);
  const onHighToggle = () => setHighNotification(!highNotification);

  // Todo: Stop both components re-rendering when one is toggled.
  return (
    <SafeAreaView>
      <TransparentHeader title='Notifications' />
      <View style={{ paddingHorizontal: '3%' }}>
        <Text style={styles.description}>
          Receive notifications when your glcuose drops below 4.0 or goes above
          7.0
        </Text>
      </View>
      <View style={{ marginTop: 25 }}>
        <View style={styles.switchItem}>
          <SwitchWithLabel
            value={lowNotification}
            onSwitchPress={onLowToggle}
            label='Low Glucose Alert'
          />
        </View>
        <View style={[styles.switchItem, styles.lastSwitchItem]}>
          <SwitchWithLabel
            value={highNotification}
            onSwitchPress={onHighToggle}
            label='High Glucose Alert'
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: '3%',
  },
  description: {
    fontSize: 15,
    color: '#FFFFFF',
    opacity: 0.5,
  },
  switchItem: {
    borderTopWidth: 0.5,
    borderColor: '#757575',
    paddingHorizontal: '3%',
  },
  lastSwitchItem: {
    borderBottomWidth: 0.5,
  },
});
export default NotificationSettingScreen;
