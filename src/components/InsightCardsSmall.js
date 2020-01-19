import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import CardItem from './CardItem';

const InsightCardsSmall = ({
  data: { average, A1C, highEventsCount, lowEventsCount },
}) => {
  const cardsData = [
    {
      id: 'average',
      title: 'Avg glucose',
      value: average,
      unit: 'mmol/L',
    },
    {
      id: 'A1C',
      title: 'Estimated A1C',
      value: A1C,
      unit: '%',
    },
    {
      id: 'lowEventsCount',
      title: 'Low BG events',
      value: lowEventsCount,
      unit: 'times',
    },
    {
      id: 'highEventsCount',
      title: 'High BG events',
      value: highEventsCount,
      unit: 'times',
    },
  ];

  const cardItems = cardsData.map(card => (
    <CardItem key={card.id} card={card} />
  ));

  return <View style={styles.container}>{cardItems}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});

InsightCardsSmall.propTypes = {
  data: PropTypes.object.isRequired,
};
export default InsightCardsSmall;
