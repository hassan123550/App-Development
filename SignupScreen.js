import React from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, ImageBackground, Linking } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignupScreen = ({ navigation }) => {
  const signupValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter a valid email')
      .required('Email Address is required'),
    password: Yup.string()
      .min(6, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const handleSignup = async (values) => {
    console.log(values);
    try {
      const url = 'https://www.tesla.com/about';
      await Linking.openURL(url);
    } catch (error) {
      console.error('Failed to open URL:', error);
    }
  };

  return (
    <Formik
      validationSchema={signupValidationSchema}
      initialValues={{ email: '', password: '', confirmPassword: '' }}
      onSubmit={handleSignup}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <ImageBackground
          source={require('../Assets/back.png')}
          style={styles.background}
        >
          <View style={styles.container}>
            <TextInput
              name="email"
              placeholder="Email Address"
              style={styles.input}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              autoCompleteType="off"
              importantForAutofill="no"
              textContentType="emailAddress"
            />
            {errors.email && touched.email && <Text style={styles.errorText}>{errors.email}</Text>}

            <TextInput
              name="password"
              placeholder="Password"
              style={styles.input}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
              autoCompleteType="off"
              importantForAutofill="no"
              textContentType="password"
            />
            {errors.password && touched.password && <Text style={styles.errorText}>{errors.password}</Text>}

            <TextInput
              name="confirmPassword"
              placeholder="Confirm Password"
              style={styles.input}
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              secureTextEntry
              autoCompleteType="off"
              importantForAutofill="no"
              textContentType="password"
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            )}

            <TouchableOpacity onPress={handleSubmit} style={styles.signupButton}>
              <Text style={styles.signupButtonText}>Signup</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.loginLinkContainer}>
              <Text style={styles.loginLinkText}>
                Already have an account? <Text style={styles.loginLink}>Login</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
  input: {
    height: 45,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 10,
    backgroundColor: 'black',
    color: 'white',
  },
  errorText: {
    fontSize: 10,
    color: 'red',
    marginBottom: 10,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupButton: {
    borderRadius: 15,
    height: 45,
    width: 300,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  signupButtonText: {
    fontSize: 16,
    color: 'black',
  },
  loginLinkContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  loginLinkText: {
    fontSize: 16,
    color: 'white',
  },
  loginLink: {
    color: '#87cefa',
  },
});

export default SignupScreen;
