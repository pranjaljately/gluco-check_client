import * as Permissions from 'expo-permissions';

const checkIfNotificationsEnabled = async () => {
  const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  if (status !== 'granted') return false;

  return true;
};

export default checkIfNotificationsEnabled;
