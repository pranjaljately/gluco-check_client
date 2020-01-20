import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import CardTitle from './CardTitle';

const CardItem = ({ card: { title, value, unit } }) => (
  <View style={styles.card}>
    <CardTitle title={title} />
    <View>
      <Text style={{ fontSize: 55, color: '#FF3A79' }}>
        {value}
        <Text style={{ fontSize: 20, color: '#FFFFFF' }}>{unit}</Text>
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#464646',
    alignItems: 'center',
    width: 179,
    borderRadius: 5,
    height: 125,
    marginVertical: 7,
    elevation: 10,
    paddingVertical: 15,
    justifyContent: 'space-around',
  },
});

CardItem.propTypes = {
  card: PropTypes.object.isRequired,
};
export default CardItem;
