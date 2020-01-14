import Constants from 'expo-constants';
import axios from 'axios';
import moment from 'moment';

const { manifest } = Constants;

const getReadings = async (from, to = moment().valueOf()) => {
  const uri = `http://${manifest.debuggerHost.split(':').shift()}:5000`;
  axios.defaults.baseURL = uri;

  try {
    let params = '';

    if (from) {
      params = `${from}-${to}`;
    }
    const res = await axios.get(`/api/v1/reading/${params}`);
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(new Error(err.response.data.msg));
  }
};

export default getReadings;
