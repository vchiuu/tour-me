import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyleSheet, TextInput, TouchableOpacity, Text, View } from 'react-native';
import { toggleForm, loginUser } from '../actions/AuthenticationActions';
import EntryButton from '../assets/images/EntryButton.svg';
import styles from '../styles/GeneralStyleSheet';

const SignInForm = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <React.Fragment>
      <Text style={styles.jumbotitle}> Sign In</Text>
      <View style={{ paddingTop: 25 }} />
      <TextInput
        style={styles.textform}
        keyboardType="email-address"
        onChangeText={text => setEmail(text)}
        placeholder="Email"
        textContentType="emailAddress"
        value={email}
      />
      <View style={{ paddingTop: 10 }} />
      <TextInput
        style={styles.textform}
        onChangeText={text => setPassword(text)}
        placeholder="Password"
        secureTextEntry
        textContentType="password"
        value={password}
      />
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Your Password?</Text>
      </TouchableOpacity>
      <View style={{ paddingVertical: 5 }} />
      {!props.isValidFirebaseAuth ? (
        <Text style={styles.firebaseErrorMsg}> {props.firebaseAuthErrorMessage} </Text>
      ) : null}
      <TouchableOpacity style={styles.entryButtonWrapper} onPress={() => props.onLogin(email, password)}>
        <EntryButton style={styles.entryButton} />
      </TouchableOpacity>
      <Text style={signinform.account}>Don&apos;t have an account?</Text>
      <TouchableOpacity onPress={() => props.onToggleForm(false, 'SignUp')}>
        <Text style={signinform.signup}>Sign Up</Text>
      </TouchableOpacity>
    </React.Fragment>
  );
};

SignInForm.propTypes = {
  onToggleForm: PropTypes.func,
  onLogin: PropTypes.func,
};

const signinform = StyleSheet.create({
  account: {
    fontFamily: 'AirbnbCereal-Book',
    fontSize: 16,
    color: '#8F8F8F',
    paddingLeft: '10%',
  },
  signup: {
    color: '#8F8F8F',
    fontFamily: 'AirbnbCereal-Bold',
    fontSize: 16,
    paddingLeft: '10%',
    textTransform: 'uppercase',
  },
  errorMessage: {
    color: '#F52525',
    fontFamily: 'AirbnbCereal-Book',
    fontSize: 12,
    paddingLeft: '11%',
  },
});

const mapStateToProps = state => ({
  onLoad: state.loginRegistration.onLoad,
  formType: state.loginRegistration.formType,
  isValidFirebaseAuth: state.firebaseAuth.isValidFirebaseAuth,
  firebaseAuthErrorMessage: state.firebaseAuth.firebaseAuthErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  onToggleForm: (onLoad, formType) => {
    dispatch(toggleForm(onLoad, formType));
  },
  onLogin: (email, password) => {
    dispatch(loginUser(email, password));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
