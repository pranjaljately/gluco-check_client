import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import TransparentHeader from '../components/TransparentHeader';
import SwitchWithLabel from '../components/SwitchWithLabel';
import registerForPushNotificationsAsync from '../services/RegisterForPushNotificationsAsync ';
import checkIfNotificationsEnabled from '../services/CheckIfNotificationsEnabled';
import PermissionAlert from '../components/PermissionAlert';

const AlertSettingScreen = () => {
  const [lowNotification, setLowNotification] = useState(true);
  const [highNotification, setHighNotification] = useState(true);

  const onLowToggle = async () => {
    let toggleState = !lowNotification;
    if (!(await checkIfNotificationsEnabled())) {
      PermissionAlert();
      toggleState = false;
    }
    setLowNotification(toggleState);
  };
  const onHighToggle = async () => {
    let toggleState = !highNotification;
    if (!(await checkIfNotificationsEnabled())) {
      PermissionAlert();
      toggleState = false;
    }
    setHighNotification(toggleState);
  };

  useEffect(() => {
    const permissions = async () => {
      try {
        await registerForPushNotificationsAsync();
      } catch (err) {
        console.log(err.message);
      }
    };
    permissions();
  }, []);

  /* 
    Todo: Stop both components re-rendering when one is toggled 
    Todo: Move useEffect to home screen 
  */

  return (
    <SafeAreaView>
      <TransparentHeader title='Alerts' />
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
export default AlertSettingScreen;
