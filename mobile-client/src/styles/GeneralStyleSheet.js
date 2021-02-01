import { Dimensions, StyleSheet } from 'react-native';

var screenHeight = Dimensions.get('window').height;
var screenWidth = Dimensions.get('window').width;

const GeneralStyles = StyleSheet.create({
  backdrop: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    justifyContent: 'center',
    padding: 20,
  },
  background: {
    flex: 1,
    backgroundColor: '#D9F1FD',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },
  button: {
    display: 'flex',
    backgroundColor: '#499AFD',
    borderRadius: 30,
    paddingVertical: 9,
    width: screenWidth * 0.6,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    alignSelf: 'center',
    fontFamily: 'AirbnbCereal-Light',
    fontSize: 16,
  },
  contentCardDark: {
    width: 116,
    height: 167,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    backgroundColor: 'red',
    color: 'white',
  },
  contentCardLight: {
    width: 116,
    height: 167,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    backgroundColor: 'blue',
    marginRight: 10,
  },
  contentCardTitle: {
    display: 'flex',
    paddingHorizontal: '12%',
    fontFamily: 'AirbnbCereal-Book',
    fontSize: 16,
    color: 'white',
    paddingTop: '98%',
  },
  drawer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    paddingVertical: 50,
    paddingHorizontal: 30,
    position: 'absolute',
    width: screenWidth,
    height: screenHeight * 0.75,
    top: screenHeight * 0.25,
  },
  entryButton: {
    alignSelf: 'flex-end',
  },
  entryButtonWrapper: {
    paddingRight: '10%',
    paddingTop: '5%',
  },
  formErrorMsg: {
    color: '#F52525',
    fontFamily: 'AirbnbCereal-Book',
    fontSize: 12,
    paddingLeft: '11%',
  },
  firebaseErrorMsg: {
    borderRadius: 10,
    color: '#F52525',
    fontFamily: 'AirbnbCereal-Book',
    fontSize: 12,
    marginLeft: '10%',
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: '80%',
    backgroundColor: '#FFCCCC',
  },
  hikeBG: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
    elevation: -1,
    zIndex: -1,
  },
  innerModal: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: '6%',
    borderRadius: 30,
    width: screenWidth * 0.8,
    alignSelf: 'center',
    paddingVertical: '4%',
  },
  flatlist: {
    height: 0,
    backgroundColor: 'red',
  },
  forgotPassword: {
    fontFamily: 'AirbnbCereal-Book',
    fontSize: 12,
    color: '#8F8F8F',
    alignSelf: 'flex-end',
    paddingRight: '11%',
    paddingTop: 1,
  },
  formStyle: {
    position: 'absolute',
    justifyContent: 'center',
    width: screenWidth,
  },
  jumbotitle: {
    fontFamily: 'AirbnbCereal-Medium',
    fontSize: 44,
    color: '#8F8F8F',
    paddingLeft: '9%',
  },
  modalCloseBtn: {
    alignSelf: 'flex-end',
  },
  modalTitle: {
    fontFamily: 'AirbnbCereal-Book',
    fontSize: 18,
    color: 'black',
  },
  modalBriefDescription: {
    paddingTop: 8,
    fontFamily: 'AirbnbCereal-Light',
    fontSize: 14,
    maxWidth: '95%',
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
    marginTop: 10,
  },
  title: {
    fontFamily: 'AirbnbCereal-Medium',
    fontSize: 24,
    alignSelf: 'center',
  },
  subtitle: {
    fontFamily: 'AirbnbCereal-Book',
    fontSize: 18,
    paddingVertical: 10,
  },
});

export default GeneralStyles;