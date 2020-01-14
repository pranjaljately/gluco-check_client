import { Alert } from 'react-native';
import PropTypes from 'prop-types';

const PromptAlert = ({
  title,
  message,
  negative = 'Cancel',
  positive = 'OK',
  positiveButtonPress = () => {},
}) =>
  Alert.alert(
    title,
    message,
    [
      {
        text: negative,
        style: 'cancel',
      },
      { text: positive, onPress: positiveButtonPress },
    ],
    { cancelable: true }
  );

PromptAlert.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  negative: PropTypes.string,
  positive: PropTypes.string,
  positiveButtonPress: PropTypes.func,
};

export default PromptAlert;
