import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import CardItem from './CardItem';

const InsightCardsSmall = ({ data }) => {
  const cardItems = data.map(({ id, title, value, unit }) => (
    <CardItem key={id} title={title} value={value} unit={unit} />
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
  data: PropTypes.array.isRequired,
};
export default InsightCardsSmall;
