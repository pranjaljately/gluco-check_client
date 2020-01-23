import axios from 'axios';
import moment from 'moment';

const getReadings = async (from, to = moment().valueOf()) => {
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
