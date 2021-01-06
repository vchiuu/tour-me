import { Dimensions, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

var screenHeight = Dimensions.get("window").height;
var screenWidth = Dimensions.get("window").width;

const GeneralStyles = StyleSheet.create({
    background: {
        flex: 1, 
        backgroundColor: '#D9F1FD', 
        flexDirection: 'column', 
        alignContent: 'center', 
        justifyContent: 'center',
    }, 
    button: {
        backgroundColor: '#499AFD',
        borderRadius: 30, 
        paddingVertical: 7,
        width: screenWidth * 0.6,
        alignSelf: 'center'
    },
    buttonText: {
        color: '#fff',
        alignSelf: 'center', 
        fontFamily: 'AirbnbCereal-Light', 
        fontSize: 16
    },
    drawer: {
        flex: 4,
        backgroundColor: '#fff',
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        paddingVertical: 50,
        paddingHorizontal: 30,
        position: 'absolute',
        width: screenWidth,
        height: screenHeight * 0.7,
        top: screenHeight * 0.3,
    },
    jumbotitle : {
        fontFamily: 'AirbnbCereal-Medium', 
        fontSize: 44, 
        color: '#8F8F8F',
        paddingLeft: '9%'
    },
    textform: {
        backgroundColor: '#fff', 
        height: 38, 
        width: '80%',
        borderRadius: 10, 
        fontFamily: 'AirbnbCereal-Book', 
        fontSize: 16, 
        color: '#8F8F8F',
        alignSelf: 'center', 
        paddingHorizontal: 10,
    }, 
    forgotPassword: {
        fontFamily: 'AirbnbCereal-Book', 
        fontSize: 12,
        color: '#8F8F8F',
        alignSelf: 'flex-end',
        paddingRight: '11%',
        paddingTop: 1
    }
});

export default GeneralStyles;