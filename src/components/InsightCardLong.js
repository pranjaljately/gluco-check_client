import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import CardTitle from './CardTitle';
import LongCardItem from './LongCardItem';

const InsightCardLong = ({ title, distribution: { low, high, target } }) => {
  const data = [
    {
      id: 'low',
      value: low,
      unit: '% low',
    },
    {
      id: 'target',
      value: target,
      unit: '% in target*',
    },
    {
      id: 'high',
      value: high,
      unit: '% high',
    },
  ];

  const longCardItems = data.map(card => (
    <LongCardItem key={card.id} card={card} />
  ));

  return (
    <View style={styles.cardLong}>
      <CardTitle title={title} />
      <View style={styles.cardData}>{longCardItems}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardLong: {
    width: '100%',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    height: 175,
    backgroundColor: '#464646',
    borderRadius: 5,
    marginVertical: 15,
    elevation: 10,
    paddingVertical: 15,
    justifyContent: 'space-around',
  },
  cardData: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
});

InsightCardLong.propTypes = {
  title: PropTypes.string.isRequired,
  distribution: PropTypes.object.isRequired,
};
export default InsightCardLong;
