import React, {useState} from 'react';
import { connect } from 'react-redux';
import {StyleSheet, TextInput, TouchableOpacity, Text, View} from 'react-native';
import { toggleForm } from '../RootActions';
import EntryButton from '../assets/images/EntryButton.svg';
import styles from '../styles/GeneralStyleSheet';

const SignInForm = (props) => {
    const [email, setEmail] = useState('Email');
    const [password, setPassword] = useState('Password');

    return (
        <>
            <Text style={styles.jumbotitle}> Sign In</Text>
            <View style={{paddingTop: 25}}/>
            <TextInput style={styles.textform}
                onChangeText={text => setEmail(text)}
                value={email}/>
            <View style={{paddingTop: 10}}/>
            <TextInput style={styles.textform}
                onChangeText={text => setPassword(text)}
                value={password}/>
            <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot Your Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.entryButtonWrapper}>
                <EntryButton style={styles.entryButton}/>
            </TouchableOpacity>
            <Text style={signinform.account}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => props.onToggleForm(false, 'SignUp')}>
                <Text style={signinform.signup}>Sign Up</Text>
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
    signup: {
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

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);