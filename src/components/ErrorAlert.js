import { Alert } from 'react-native';
import PropTypes from 'prop-types';

const ErrorAlert = ({ title, message, buttonText = 'OK' }) =>
  Alert.alert(title, message, [{ text: buttonText }], { cancelable: false });

ErrorAlert.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};
export default ErrorAlert;
