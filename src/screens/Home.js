import React from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import HikeBG from '../assets/images/HikeBG.svg';
import QRScanIcon from '../assets/images/QRScanIcon';
import styles from '../styles/GeneralStyleSheet';

const Home = () => {
  console.log('make those red things go away');
  return (
    <>
      <View style={styles.background}>
        <Text style={homeStyles.welcomeTitle}> Welcome back </Text>
        <Text style={homeStyles.welcomeSubtitle}> Where are we exploring today? </Text>
        <HikeBG style={{ position: 'absolute', alignSelf: 'center', top: 10 }} />
        <View style={styles.drawer}>
          <Text style={homeStyles.drawerSubtitle}>Recent Adventures</Text>
          <View style={{borderRadius: }}>

          </View>
          <Text style={homeStyles.drawerSubtitle}>Recommended Adventures</Text>
          <TouchableOpacity style={styles.button}>
            <QRScanIcon />
            <View style={{ paddingRight: 5 }} />
            <Text style={styles.buttonText}>Scan QR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const homeStyles = StyleSheet.create({
  welcomeTitle: {
    position: 'absolute',
    fontFamily: 'AirbnbCereal-Medium',
    elevation: 3,
    fontSize: 24,
    zIndex: 3,
    top: '10%',
    left: '5%',
    color: '#686868',
  },
  welcomeSubtitle: {
    position: 'absolute',
    fontFamily: 'AirbnbCereal-Book',
    elevation: 6,
    fontSize: 20,
    zIndex: 3,
    top: '14%',
    color: '#686868',
    right: '5%',
  },
  drawerSubtitle: {
    fontFamily: 'AirbnbCereal-Book',
    fontSize: 20,
  },
});

export default Home;
