import React from 'react';
import { Label, Item, Input, Form } from 'native-base';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import SubmitButton from './SubmitButton';
import InputError from './InputError';
import login from '../services/api/Login';
import ErrorAlert from './ErrorAlert';

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  }

  return errors;
};

const LoginForm = ({ navigation }) => (
  <Formik
    initialValues={{ email: '', password: '' }}
    onSubmit={async ({ email, password }) => {
      try {
        await login({
          email,
          password,
        });
        navigation.navigate('App');
      } catch (err) {
        ErrorAlert({
          title: err.message,
          message: 'The email or password you entered is incorrect',
        });
      }
    }}
    validate={validate}
  >
    {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
      <Form>
        <View style={{ marginVertical: 10, marginBottom: 17 }}>
          <Item floatingLabel last style={styles.formItem}>
            <Label style={styles.label}>Email</Label>
            <Input
              style={styles.input}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              autoCapitalize='none'
            />
          </Item>
          <InputError name='email' />
          <Item floatingLabel last style={styles.formItem}>
            <Label style={styles.label}>Password</Label>
            <Input
              style={styles.input}
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
          </Item>
          <InputError name='password' />
        </View>
        {isSubmitting ? (
          <ActivityIndicator size='large' color='#62B1F6' />
        ) : (
          <SubmitButton text='Log In' handleSubmit={handleSubmit} />
        )}
      </Form>
    )}
  </Formik>
);

const styles = StyleSheet.create({
  label: { color: '#FFFFFF' },
  input: { color: '#FFFFFF' },
  formError: { color: 'red', fontSize: 15 },
  formItem: { marginTop: 10 },
});

LoginForm.propTypes = {
  navigation: PropTypes.object.isRequired,
};
export default LoginForm;
