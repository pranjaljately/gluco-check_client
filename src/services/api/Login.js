import Constants from 'expo-constants';
import axios from 'axios';

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
  } catch (err) {
    return Promise.reject(new Error(err.response.data.msg));
  }
};

export default login;
