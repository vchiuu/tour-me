import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ContentCard from '../components/ContentCard';
import HikeBG from '../assets/images/HikeBG.svg';
import QRScanIcon from '../assets/images/QRScanIcon';
import styles from '../styles/GeneralStyleSheet';

const Home = () => {
  const TEST_DATA = [
    {
      id: 'sfijasodigha0',
      title: 'First Title',
      briefDescription: 'First Brief Description',
      lightMode: true,
    },
    {
      id: 'aksodfheow1',
      title: 'Second Title',
      briefDescription: 'Second Brief Description',
      lightMode: true,
    },
    {
      id: 'asdiufhaosdf',
      title: 'Third Title',
      briefDescription: 'Third Brief Description',
      lightMode: false,
    },
  ];

  const renderItem = ({ item }) => (
    <ContentCard title={item.title} briefDescription={item.briefDescription} lightMode={item.lightMode} />
  );
  return (
    <>
      <SafeAreaView style={styles.background}>
        <Text style={homeStyles.welcomeTitle}> Welcome back </Text>
        <Text style={homeStyles.welcomeSubtitle}> Where are we exploring today? </Text>
        <HikeBG style={{ position: 'absolute', alignSelf: 'center', top: 10 }} />
        <View style={styles.drawer}>
          <Text style={homeStyles.drawerSubtitle}>Recent Adventures</Text>
          <View style={{ paddingVertical: '2%' }} />
          <FlatList
            style={{ flexGrow: 0 }}
            horizontal={true}
            data={TEST_DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
          <Text style={homeStyles.drawerSubtitle}>Recommended Adventures</Text>
          <TouchableOpacity style={styles.button}>
            <QRScanIcon />
            <View style={{ paddingRight: 5 }} />
            <Text style={styles.buttonText}>Scan QR</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
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
