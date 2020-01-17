import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const CardItem = ({ title, value, unit }) => (
  <View style={styles.card}>
    <View>
      <Text style={styles.cardTitle}>{title}</Text>
    </View>
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
    paddingTop: 15,
    paddingBottom: 15,
    justifyContent: 'space-around',
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
});

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
export default CardItem;
