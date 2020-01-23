import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import axios from 'axios';

import {
  setHighNotificationAsync,
  setLowNotificationAsync,
} from './NotificationPreferences';

const registerForPushNotificationsAsync = async () => {
  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  // only asks if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  // On Android, permissions are granted on app installation, so
  // `askAsync` will never prompt the user

  // Stop here if the user did not grant permissions
  if (status !== 'granted') {
    setHighNotificationAsync(false);
    setLowNotificationAsync(false);
    return Promise.reject(new Error('User did not grant permissions'));
  }

  // Get the token that uniquely identifies this device
  const token = await Notifications.getExpoPushTokenAsync();
  console.log('TCL: registerForPushNotificationsAsync -> token', token);

  // POST the token to your backend server from where you can retrieve it to send push notifications.

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = {
    pushToken: token,
  };

  return axios.post('/api/v1/notification/token', body, config);
};

export default registerForPushNotificationsAsync;
