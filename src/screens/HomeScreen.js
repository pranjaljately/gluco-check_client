import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <View style={style.container}>
      <View style={style.currentReading}>
        <Text style={style.secondary}>4.1-></Text>
      </View>
      <View style={style.subContainer}>
        <View>
          <Text style={style.secondaryMedium}>Avg: 4.8 mmol/L</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
          <Text style={style.secondarySmall}>2 minutes ago</Text>
          <FontAwesome.Button
            name='refresh'
            size={26}
            color='#7CD225'
            backgroundColor='transparent'
            iconStyle={style.iconStyle}
          />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 70,
    width: '90%',
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  primary: {
    color: '#FF3A79',
  },
  secondary: {
    color: '#FFFFFF',
    fontSize: 100,
  },
  secondaryMedium: {
    color: '#FFFFFF',
    fontSize: 25,
  },
  secondarySmall: {
    color: '#FFFFFF',
    fontSize: 15,
    textTransform: 'uppercase',
  },
  currentReading: {
    alignItems: 'flex-start',
    alignItems: 'center',
    height: 120,
  },
  iconStyle: {
    marginRight: 0,
  },
});
export default HomeScreen;
