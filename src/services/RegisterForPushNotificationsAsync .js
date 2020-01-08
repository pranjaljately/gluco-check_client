import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

const { manifest } = Constants;

const PUSH_ENDPOINT = `http://${manifest.debuggerHost
  .split(':')
  .shift()}:5000/`;

const registerForPushNotificationsAsync = async () => {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  let finalStatus = existingStatus;

  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  if (existingStatus !== 'granted') {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  // Stop here if the user did not grant permissions
  if (finalStatus !== 'granted') {
    return Promise.reject(new Error('User did not grant permissions'));
  }

  // Get the token that uniquely identifies this device
  const token = await Notifications.getExpoPushTokenAsync();
  console.log('TCL: registerForPushNotificationsAsync -> token', token);

  // POST the token to your backend server from where you can retrieve it to send push notifications.

  return fetch(PUSH_ENDPOINT, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify({
    //   token: {
    //     value: token,
    //   },
    //   user: {
    //     username: 'Brent',
    //   },
    // }),
  });
};

export default registerForPushNotificationsAsync;
