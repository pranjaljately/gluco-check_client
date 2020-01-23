import axios from 'axios';

const setHighNotificationAsync = async value => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const highNotification = {
      highNotification: value,
    };

    await axios.post('/api/v1/notification/high', highNotification, config);
  } catch (err) {
    console.log(err.message);
  }
};

const setLowNotificationAsync = async value => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const lowNotification = {
      lowNotification: value,
    };

    await axios.post('/api/v1/notification/low', lowNotification, config);
  } catch (err) {
    console.log(err.message);
  }
};

const getNotificationPreferences = async () => {
  try {
    const res = await axios.get('api/v1/notification/');
    const { highNotification, lowNotification } = res.data.notification;

    return [highNotification, lowNotification];
  } catch (err) {
    console.log(err.message);
  }
};

export {
  setHighNotificationAsync,
  getNotificationPreferences,
  setLowNotificationAsync,
};
