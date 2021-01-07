import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/GeneralStyleSheet';
import LandingSVG from '../assets/images/Landing.svg';

const Landing = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.background}>
            <LandingSVG style={{alignSelf:'center'}}/>
            <View style={{paddingVertical:10}}/>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}> 
                <Text style={styles.buttonText}>Start My Adventure</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Landing;