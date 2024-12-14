import React from 'react';
import { View, TextInput, StyleSheet, Text, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const LoginScreen = ({ navigation }) => {
  const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter a valid email')
      .required('Email Address is Required'),
    password: Yup.string()
      .min(6, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });

  const handleLogin = async (values) => {
    console.log(values);
    navigation.navigate('Tesla'); // Navigate to 'Tesla' screen after successful login
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }} showsVerticalScrollIndicator={false}>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ email: '', password: '' }}
        onSubmit={handleLogin}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <ImageBackground
            source={require('../Assets/arc_2.png')}
            style={styles.background}
          >
            <View style={styles.container}>

              <Image
                source={require('../Assets/elon.png')}
                style={styles.image}
              />

              <Text style={styles.helloText}>Hello,</Text>
              <Text style={styles.descriptionText}>It seems like you're asking about details related to the Tesla login page. Could you clarify what specific information or details you're looking for? Are you interested in the design, functionality, or something else about the Tesla login page?</Text>

              <TextInput
                name="email"
                placeholder="Email"
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
                style={styles.input1}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
                autoCompleteType="off"
                importantForAutofill="no"
                textContentType="password"
              />
              {errors.password && touched.password && <Text style={styles.errorText}>{errors.password}</Text>}

              <TouchableOpacity onPress={handleSubmit} style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Login</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={styles.signupLinkContainer}>
                <Text style={styles.signupLinkText}>
                  Don't have an account? <Text style={styles.signupLink}>Sign Up</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        )}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 250,
    marginTop: -10
  },
  helloText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    marginTop: -30,
    marginRight: 120
  },
  descriptionText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20
  },
  input: {
    height: 45,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 10,
    backgroundColor: 'black',
    color: 'white',
    marginTop: 100
  },
  input1: {
    height: 45,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 10,
    backgroundColor: 'black',
    color: 'white',
    marginTop: 20
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    marginTop: -5,
    marginBottom: 10
  },
  background: {
    height: '90%'
  },
  loginButton: {
    marginTop: 20,
    width: '100%',
    height: 45,
    borderRadius: 10,
    backgroundColor: '#696969',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginButtonText: {
    fontSize: 16,
    color: 'white'
  },
  signupLinkContainer: {
    marginTop: 10
  },
  signupLinkText: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center'
  },
  signupLink: {
    color: '#1e90ff'
  }
});

export default LoginScreen;
