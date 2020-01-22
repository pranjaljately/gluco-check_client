import axios from 'axios';
import Constants from 'expo-constants';

const { manifest } = Constants;

const setAuthToken = token => {
  axios.defaults.headers.common['x-auth-token'] = token;

  // Temp -- needs to be removed for prod
  const uri = `http://${manifest.debuggerHost.split(':').shift()}:5000`;
  axios.defaults.baseURL = uri;
};

export default setAuthToken;
