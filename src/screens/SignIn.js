import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';

import MuseumImg from '../assets/images/Museum.svg';
import ArtImg from '../assets/images/Art.svg';
import HikeBG from '../assets/images/HikeBG.svg';
import styles from '../styles/GeneralStyleSheet';

const SignIn = props => (
  <View style={styles.background}>
    <MuseumImg style={signin.museum} />
    <ArtImg style={signin.artGallery} />
    {props.onLoad === true ? (
      <SignInForm />
    ) : props.formType === 'SignIn' ? (
      <React.Fragment>
        <Animatable.View style={styles.formStyle} animation="fadeInRightBig" duration={2000}>
          <SignInForm />
        </Animatable.View>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <Animatable.View style={styles.formStyle} animation="fadeOutLeftBig" duration={2000}>
          <SignInForm />
        </Animatable.View>
        <Animatable.View style={styles.formStyle} animation="fadeInRightBig" duration={2000} delay={500}>
          <SignUpForm />
        </Animatable.View>
      </React.Fragment>
    )}
    <HikeBG style={styles.hikeBG} />
  </View>
);

const signin = StyleSheet.create({
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
  museum: {
    position: 'absolute',
    top: '7%',
    left: '7%',
    transform: [{ rotate: '-19deg' }],
  },
  artGallery: {
    position: 'absolute',
    top: '16%',
    right: '8%',
    transform: [{ rotate: '15deg' }],
  },
});

const mapStateToProps = state => ({
  onLoad: state.loginRegistration.onLoad,
  formType: state.loginRegistration.formType,
});

export default connect(mapStateToProps)(SignIn);
