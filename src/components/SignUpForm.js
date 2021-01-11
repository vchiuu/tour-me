import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleForm, registerUser } from '../actions/AuthenticationActions';
import { StyleSheet, TextInput, TouchableOpacity, Text, View } from 'react-native';
import EntryButton from '../assets/images/EntryButton.svg';
import styles from '../styles/GeneralStyleSheet';

const SignUpForm = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailValidation, setEmailValidation] = useState({
    isValidEmail: true,
    emailErrorMsg: '',
  });
  const [passwordValidation, setPasswordValidation] = useState({
    isValidPassword: true,
    passwordErrorMsg: '',
  });
  const [confirmPwdValidation, setConfirmPwdValidation] = useState({
    isConfirmPassword: true,
    confirmPwdErrorMsg: '',
  });
  const [formValidation, setFormValidation] = useState({
    isValidForm: true,
    formErrorMsg: '',
  });

  const handleValidEmail = value => {
    if (value.trim().length === 0) {
      setEmailValidation({
        isValidEmail: false,
        emailErrorMsg: 'The email field is required.',
      });
    } else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)) {
      setEmailValidation({
        isValidEmail: true,
        emailErrorMsg: '',
      });
    } else {
      setEmailValidation({
        isValidEmail: false,
        emailErrorMsg: 'Please enter a valid email address',
      });
    }
  };

  const handleValidPassword = value => {
    if (value.trim().length < 8) {
      setPasswordValidation({
        isValidPassword: false,
        passwordErrorMsg: 'Password must be at least 8 characters',
      });
    } else if (value.search(/[A-Z]/) < 0) {
      setPasswordValidation({
        isValidPassword: false,
        passwordErrorMsg: 'Password must contain at least 1 uppercase letter',
      });
    } else {
      setPasswordValidation({
        isValidPassword: true,
        passwordErrorMsg: '',
      });
    }
  };

  const validateConfirmPassword = value => {
    if (value != password) {
      setConfirmPwdValidation({
        isConfirmPassword: false,
        confirmPwdErrorMsg: 'Password and confirmation do not match',
      });
    } else {
      setConfirmPwdValidation({
        isConfirmPassword: true,
        confirmPwdErrorMsg: '',
      });
    }
  };

  function validateAndSignUp(firstName, lastName, email, password) {
    if (emailValidation.isValidEmail && passwordValidation.isValidPassword && confirmPwdValidation.isConfirmPassword) {
      setFormValidation({
        isValidForm: true,
        formErrorMsg: '',
      });
      props.onRegister(firstName, lastName, email, password);
    } else {
      setFormValidation({
        isValidForm: false,
        formErrorMsg: 'Please fix the errors above before registering',
      });
    }
  }

  return (
    <>
      <Text style={styles.jumbotitle}> Sign Up</Text>
      <View style={{ paddingTop: 25 }} />
      <View style={{ display: 'flex', flexDirection: 'row', paddingHorizontal: '10%' }}>
        <TextInput
          style={[styles.textform, { width: '48%' }]}
          onChangeText={text => setFirstName(text)}
          value={firstName}
          placeholder="First Name"
        />
        <View style={{ paddingHorizontal: '2%' }} />
        <TextInput
          style={[styles.textform, { width: '48%' }]}
          onChangeText={text => setLastName(text)}
          value={lastName}
          placeholder="Last Name"
        />
      </View>
      <View style={{ paddingTop: 10 }} />
      <TextInput
        style={styles.textform}
        value={email}
        placeholder="Email"
        textContentType="emailAddress"
        onChangeText={text => setEmail(text)}
        onEndEditing={e => handleValidEmail(e.nativeEvent.text)}
      />
      {!emailValidation.isValidEmail ? (
        <Text style={styles.formErrorMsg}> {emailValidation.emailErrorMsg} </Text>
      ) : null}
      <View style={{ paddingTop: 10 }} />
      <TextInput
        style={styles.textform}
        onChangeText={text => setPassword(text)}
        value={password}
        placeholder="Password"
        secureTextEntry
        textContentType="password"
        onEndEditing={e => handleValidPassword(e.nativeEvent.text)}
      />
      {!passwordValidation.isValidPassword ? (
        <Text style={styles.formErrorMsg}> {passwordValidation.passwordErrorMsg} </Text>
      ) : null}
      <View style={{ paddingTop: 10 }} />
      <TextInput
        style={styles.textform}
        onChangeText={text => setConfirmPassword(text)}
        value={confirmPassword}
        placeholder="Confirm Password"
        secureTextEntry
        textContentType="password"
        onEndEditing={e => validateConfirmPassword(e.nativeEvent.text)}
      />
      {!confirmPwdValidation.isConfirmPassword ? (
        <Text style={styles.formErrorMsg}> {confirmPwdValidation.confirmPwdErrorMsg} </Text>
      ) : null}
      {!formValidation.isValidForm ? (
        <Text style={[styles.formErrorMsg, { paddingTop: 2 }]}> {formValidation.formErrorMsg} </Text>
      ) : null}
      <TouchableOpacity
        style={styles.entryButtonWrapper}
        onPress={() => validateAndSignUp(firstName, lastName, email, password)}
      >
        <EntryButton style={styles.entryButton} />
      </TouchableOpacity>
      <Text style={signinform.account}>Already have an account?</Text>
      <TouchableOpacity onPress={() => props.onToggleForm(false, 'SignIn')}>
        <Text style={signinform.signin}>Sign In</Text>
      </TouchableOpacity>
    </>
  );
};

SignUpForm.propTypes = {
  onToggleForm: PropTypes.func,
  onRegister: PropTypes.func,
};

const signinform = StyleSheet.create({
  account: {
    fontFamily: 'AirbnbCereal-Book',
    fontSize: 16,
    color: '#8F8F8F',
    paddingLeft: '10%',
  },
  signin: {
    color: '#8F8F8F',
    fontFamily: 'AirbnbCereal-Bold',
    fontSize: 16,
    paddingLeft: '10%',
    textTransform: 'uppercase',
  },
});

const mapStateToProps = state => ({
  onLoad: state.loginRegistration.onLoad,
  formType: state.loginRegistration.formType,
});

const mapDispatchToProps = dispatch => ({
  onToggleForm: (onLoad, formType) => {
    dispatch(toggleForm(onLoad, formType));
  },
  onRegister: (firstName, lastName, email, password) => {
    dispatch(registerUser(firstName, lastName, email, password));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
