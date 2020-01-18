import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const CardTitle = ({ title }) => <Text style={styles.cardTitle}>{title}</Text>;

const styles = StyleSheet.create({
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
});

CardTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CardTitle;
