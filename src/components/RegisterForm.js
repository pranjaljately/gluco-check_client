import React from 'react';
import { Label, Item, Input, Form } from 'native-base';
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import SubmitButton from './SubmitButton';
import InputError from './InputError';
import register from '../services/api/Register';

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 50) {
    errors.name = 'Must be 50 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 6) {
    errors.password = 'Passwords must be at least 6 characters long';
  }

  return errors;
};

const RegisterForm = () => (
  <Formik
    initialValues={{ name: '', email: '', password: '' }}
    onSubmit={async ({ name, email, password }, action) => {
      try {
        await register({
          name,
          email,
          password,
        });
      } catch (err) {
        action.setFieldError('email', err.message);
      }
    }}
    validate={validate}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <Form>
        <View style={{ marginVertical: 20 }}>
          <Item floatingLabel last style={styles.formItem}>
            <Label style={styles.label}>Name</Label>
            <Input
              style={styles.input}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
          </Item>
          <InputError name='name' />
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
        <SubmitButton text='Sign Up' handleSubmit={handleSubmit} />
      </Form>
    )}
  </Formik>
);

const styles = StyleSheet.create({
  label: { color: '#FFFFFF' },
  input: { color: '#FFFFFF' },
  formError: { color: 'red', fontSize: 15 },
  formItem: { marginTop: 20 },
});

export default RegisterForm;
