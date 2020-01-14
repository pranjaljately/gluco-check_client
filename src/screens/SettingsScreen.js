import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  AsyncStorage,
} from 'react-native';
import PropTypes from 'prop-types';
import TransparentHeader from '../components/TransparentHeader';
import PromptAlert from '../components/PromptAlert';

const SettingsScreen = ({ navigation }) => {
  const positiveButtonPress = async () => {
    await AsyncStorage.clear();
    navigation.navigate('Auth');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TransparentHeader title='Settings' />
      <View style={{ marginTop: 25 }}>
        <View style={styles.logOut}>
          <Text
            style={styles.label}
            onPress={() =>
              PromptAlert({
                title: 'Log out',
                message: 'Log out of Gluco-check?',
                positive: 'Log out',
                positiveButtonPress,
              })
            }
          >
            Log out
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  label: { fontSize: 20, color: '#FFFFFF' },
  logOut: {
    paddingVertical: 12,
    borderTopWidth: 0.5,
    borderColor: '#757575',
    paddingHorizontal: '3%',
    borderBottomWidth: 0.5,
  },
});

SettingsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SettingsScreen;
