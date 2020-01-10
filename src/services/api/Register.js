import Constants from 'expo-constants';
import axios from 'axios';
import { AsyncStorage } from 'react-native';

const { manifest } = Constants;

const register = async formData => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const uri = `http://${manifest.debuggerHost.split(':').shift()}:5000`;
  axios.defaults.baseURL = uri;

  try {
    const res = await axios.post('/api/v1/user/register', formData, config);
    await AsyncStorage.setItem('token', res.data.token);
  } catch (err) {
    return Promise.reject(new Error(err.response.data.msg));
  }
};

export default register;
