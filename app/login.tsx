import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import React, { useState } from 'react';

import AuthHeader from '../components/AuthHeader';

import Container from '../components/Container';
import InputComponent from '../components/InputComponent';
import { Button } from 'react-native-paper';
import { colors } from '../constants/Colors';
import { useRouter } from 'expo-router';
import * as yup from 'yup';
import { useFormik } from 'formik';
type Props = {};
const width = Dimensions.get('window').width;
const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});
const Login = (props: Props) => {
  const router = useRouter();
  const { values, isSubmitting, errors, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  const { email, password } = values;

  return (
    <View style={{ flex: 1 }}>
      <AuthHeader />

      <View style={{ alignItems: 'center', marginTop: 30 }}>
        <Image
          source={require('../assets/images/logo.png')}
          style={{ width: width, height: 150 }}
        />
        <View style={{ marginTop: 60 }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Sign in</Text>
        </View>
      </View>
      <Container>
        <Text
          onPress={() => router.push('/signup')}
          style={{ alignSelf: 'flex-end', color: '#1A91FF', marginTop: 20 }}
        >
          Create an account
        </Text>
        <View style={{ gap: 15 }}>
          <InputComponent
            label="Email"
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={handleChange('email')}
            value={email}
          />
          <InputComponent
            label="Password"
            placeholder="Password"
            keyboardType="default"
            onChangeText={handleChange('password')}
            value={password}
          />
          <Button mode="contained" buttonColor={colors.lightGreen}>
            Sign in
          </Button>
          <Button
            style={{ marginTop: 20 }}
            textColor="#1A91FF"
            onPress={() => router.push('/forgot')}
          >
            Can't remember your password?
          </Button>
        </View>
      </Container>
    </View>
  );
};

export default Login;
