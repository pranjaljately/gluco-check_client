import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';

const InputError = ({ name }) => (
  <ErrorMessage style={styles.formError} component={Text} name={name} />
);

InputError.propTypes = {
  name: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  formError: { color: 'red', fontSize: 15 },
});

export default InputError;
