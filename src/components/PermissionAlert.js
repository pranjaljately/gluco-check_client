import { Alert } from 'react-native';

const PermissionAlert = () =>
  Alert.alert(
    'Notifications not enabled',
    'To receive alerts you must enable notifications. Please enable notifications in Settings.',
    [{ text: 'OK' }],
    { cancelable: false }
  );

export default PermissionAlert;
