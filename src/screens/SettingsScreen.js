import React from 'react';
import { View, StyleSheet, SafeAreaView, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import TransparentHeader from '../components/TransparentHeader';
import PromptAlert from '../components/PromptAlert';
import PrimaryBtn from '../components/PrimaryBtn';

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
          <PrimaryBtn
            text='Log out?'
            onPress={() =>
              PromptAlert({
                title: 'Log out',
                message: 'Log out of Gluco-check?',
                positive: 'Log out',
                positiveButtonPress,
              })
            }
          />
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
