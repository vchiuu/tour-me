import React, {useState} from 'react';
import { connect } from 'react-redux';
import { toggleForm } from '../RootActions';
import {StyleSheet, TextInput, TouchableOpacity, Text, View} from 'react-native';
import EntryButton from '../assets/images/EntryButton.svg';
import styles from '../styles/GeneralStyleSheet';

const SignUpForm = (props) => {
    const [firstName, setFirstName] = useState('First Name');
    const [lastName, setLastName] = useState('Last Name');
    const [email, setEmail] = useState('Email');
    const [password, setPassword] = useState('Password');
    const [confirmPassword, setConfirmPassword] = useState('Confirm Password');

    return (
        <>
            <Text style={styles.jumbotitle}> Sign Up</Text>
            <View style={{paddingTop: 25}}/>
            <View style={{display: 'flex', flexDirection: 'row', paddingHorizontal: '10%'}}>
                <TextInput 
                    style={[styles.textform, {width: '48%'}]}
                    onChangeText={text=>setFirstName(text)}
                    value={firstName}/>
                <View style={{paddingHorizontal: '2%'}}/>
                <TextInput 
                    style={[styles.textform, {width: '48%'}]}
                    onChangeText={text => setLastName(text)}
                    value={lastName}/>
            </View>
            <View style={{paddingTop: 10}}/>
            <TextInput style={styles.textform}
                onChangeText={text => setEmail(text)}
                value={email}/>
            <View style={{paddingTop: 10}}/>
            <TextInput style={styles.textform}
                onChangeText={text => setPassword(text)}
                value={password}/>
            <View style={{paddingTop: 10}}/>
            <TextInput style={styles.textform}
                onChangeText={text => setConfirmPassword(text)}
                value={confirmPassword}/>
            <TouchableOpacity style={styles.entryButtonWrapper}>
                <EntryButton style={styles.entryButton}/>
            </TouchableOpacity>
            <Text style={signinform.account}>Already have an account?</Text>
            <TouchableOpacity onPress={() => props.onToggleForm(false, 'SignIn')}>
                <Text style={signinform.signin}>Sign In</Text>
            </TouchableOpacity>
        </>
    )
}

const signinform = StyleSheet.create({
    account: {
        fontFamily: 'AirbnbCereal-Book',
        fontSize: 16,
        color: '#8F8F8F', 
        paddingLeft: '10%'
    },
    signin: {
        color: '#8F8F8F', 
        fontFamily: 'AirbnbCereal-Bold',
        fontSize: 16,
        paddingLeft: '10%',
        textTransform: 'uppercase', 
    }
}); 

const mapStateToProps = (state) => {
    return {
        onLoad: state.loginRegistration.onLoad, 
        formType: state.loginRegistration.formType
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleForm: (onLoad, formType) => {
            dispatch(toggleForm(onLoad, formType))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);