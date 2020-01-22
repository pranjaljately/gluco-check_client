import React from 'react';
import { View, StyleSheet, SafeAreaView, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import axios from 'axios';
import TransparentHeader from '../components/TransparentHeader';
import PromptAlert from '../components/PromptAlert';
import PrimaryBtn from '../components/PrimaryBtn';
import Description from '../components/Description';

const SettingsScreen = ({ navigation }) => {
  const positiveButtonPress = async () => {
    try {
      await AsyncStorage.clear();
      await axios.delete('/api/v1/notification/token');
    } catch (err) {
      console.log(err.message);
    }
    navigation.navigate('Auth');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TransparentHeader title='Settings' />
      <View style={{ marginTop: 25 }}>
        <View style={styles.logOut}>
          <PrimaryBtn
            text='Log out'
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
        <View style={styles.version}>
          <Description text='App version 1.0.1' />
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
  version: { paddingHorizontal: '3%', padding: 10 },
});

SettingsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SettingsScreen;
