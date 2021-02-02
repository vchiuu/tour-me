import React from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import ContentCard from '../components/ContentCard';
import HikeBGImg from '../assets/images/default-hike/hike-background.svg';
import HikeDecor from '../assets/images/default-hike/hike-button-decor.svg';
import QRScanIcon from '../assets/images/QRScanIcon.svg';

import styles from '../styles/GeneralStyleSheet';
import hike from '../styles/HikeStyleSheet';
const DATA = [
  {
    id: '123',
    title: 'Beaver Pond',
  },
  {
    id: '124',
    title: 'Lookout',
  },
  {
    id: '125',
    title: 'Sample',
  },
  {
    id: '126',
    title: 'Hello World',
  },
];
const Venue = props => {
  const renderTrails = ({ item }) => (
    <ContentCard title={item.title} img={item.img} briefDescription={item.briefDescription} />
  );

  const renderSpots = ({ item }) => {
    <ContentCard title={item.title} img={item.img} briefDescription={item.briefDescription} />
  };

  return (
    <>
      <SafeAreaView style={styles.background}>
        <HikeBGImg style={{ position: 'absolute', top: 0, height: 10 }} />
        <View style={styles.drawer}>
          <Text style={styles.title}> Algonquin Park {props.title} </Text>
          <Text style={styles.subtitle}> Trails </Text>
          <FlatList
            style={{ flexGrow: 0 }}
            horizontal
            data={DATA}
            renderItem={renderTrails}
            keyExtractor={item => item.id}
            contentInset={{ top: 0, left: 0, bottom: 0, right: 0 }}
          />
          <Text style={styles.subtitle}> Best Spots </Text>
          <FlatList
            style={{ flexGrow: 0 }}
            horizontal={true}
            data={DATA}
            renderItem={renderSpots}
            keyExtractor={item => item.id}
          />
          <HikeDecor style={hike.decor} />
          <TouchableOpacity style={hike.button}>
            <QRScanIcon />
            <Text style={hike.buttonText}>Scan QR</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Venue;
