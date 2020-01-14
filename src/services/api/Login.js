import Constants from 'expo-constants';
import { AsyncStorage } from 'react-native';
import axios from 'axios';
import SetAuthToken from '../SetAuthToken';

const { manifest } = Constants;

const login = async formData => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const uri = `http://${manifest.debuggerHost.split(':').shift()}:5000`;
  axios.defaults.baseURL = uri;

  try {
    const res = await axios.post('/api/v1/auth/login', formData, config);
    const { token } = res.data;
    await AsyncStorage.setItem('token', token);
    SetAuthToken(token);
  } catch (err) {
    return Promise.reject(new Error(err.response.data.msg));
  }
};

export default login;
