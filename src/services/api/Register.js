import Constants from 'expo-constants';
import axios from 'axios';

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
    console.log('TCL: res', res.data);
  } catch (err) {
    return Promise.reject(new Error(err.response.data.msg));
  }
};

export default register;
