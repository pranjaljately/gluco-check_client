import { AsyncStorage } from 'react-native';

const highNotification = 'highNotification';
const lowNotification = 'lowNotification';

const setHighNotificationAsync = async value => {
  try {
    await AsyncStorage.setItem(highNotification, JSON.stringify(value));
  } catch (err) {
    console.log(err.message);
  }
};

const getHighNotification = async () => {
  try {
    const value = await AsyncStorage.getItem(highNotification);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (err) {
    console.log(err.message);
  }
};

const setLowNotificationAsync = async value => {
  try {
    await AsyncStorage.setItem(lowNotification, JSON.stringify(value));
  } catch (err) {
    console.log(err.message);
  }
};

const getLowNotification = async () => {
  try {
    const value = await AsyncStorage.getItem(lowNotification);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (err) {
    console.log(err.message);
  }
};

export {
  setHighNotificationAsync,
  getHighNotification,
  setLowNotificationAsync,
  getLowNotification,
};
