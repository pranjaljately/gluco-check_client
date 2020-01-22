import React, { useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import axios from 'axios';
import TransparentHeader from '../components/TransparentHeader';
import SwitchWithLabel from '../components/SwitchWithLabel';
import Description from '../components/Description';
import areNotificationsEnabled from '../services/AreNotificationsEnabled';
import ErrorAlert from '../components/ErrorAlert';
import {
  setHighNotificationAsync,
  setLowNotificationAsync,
  getNotificationPreferences,
} from '../services/NotificationPreferences';

const AlertSettingScreen = () => {
  const [lowNotification, setLowNotification] = useState(true);
  const [highNotification, setHighNotification] = useState(true);

  const alertMessage = {
    title: 'Notifications not enabled',
    message:
      'To receive alerts you must enable notifications. Please enable notifications in Settings.',
  };

  useEffect(() => {
    const getPreferencesAndSetToggles = async () => {
      try {
        const [
          highNotification,
          lowNotification,
        ] = await getNotificationPreferences();

        setHighNotification(highNotification);
        setLowNotification(lowNotification);
      } catch (err) {
        console.log(err.message);
      }
    };
    getPreferencesAndSetToggles();
  }, []);

  const onLowToggle = async () => {
    let toggleState = !lowNotification;
    if (!(await areNotificationsEnabled())) {
      ErrorAlert(alertMessage);
      toggleState = false;
    }
    setLowNotificationAsync(toggleState);
    setLowNotification(toggleState);
  };

  const onHighToggle = async () => {
    let toggleState = !highNotification;
    if (!(await areNotificationsEnabled())) {
      ErrorAlert(alertMessage);
      toggleState = false;
    }
    setHighNotificationAsync(toggleState);
    setHighNotification(toggleState);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TransparentHeader title='Alerts' />
      <View style={{ paddingHorizontal: '3%' }}>
        <Description
          text='Receive notifications when your glcuose drops below 4.0 or goes above
          7.0'
        />
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
    flex: 1,
    backgroundColor: '#333333',
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
export default AlertSettingScreen;
