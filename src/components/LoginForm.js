import React from 'react';
import { Label, Item, Input, Form } from 'native-base';
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import SubmitButton from './SubmitButton';
import InputError from './InputError';

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

const LoginForm = () => (
  <Formik
    initialValues={{ email: '', password: '' }}
    onSubmit={({ email, password }) => console.log(email, password)}
    validate={validate}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <Form>
        <View style={{ marginVertical: 10, marginBottom: 17 }}>
          <Item floatingLabel last style={styles.formItem}>
            <Label style={styles.label}>Email</Label>
            <Input
              style={styles.input}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
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
        <SubmitButton text='Log In' handleSubmit={handleSubmit} />
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

export default LoginForm;
