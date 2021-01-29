import { Dimensions, StyleSheet } from 'react-native';

var screenHeight = Dimensions.get('window').height;
var screenWidth = Dimensions.get('window').width;

const HikeStyles = StyleSheet.create({
  button: {
    position: 'absolute',
    backgroundColor: '#9BD18C',
    borderRadius: 30,
    paddingVertical: 9,
    width: screenWidth * 0.5,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: 20,
  },
  buttonText: {
    color: '#fff',
    alignSelf: 'center',
    fontFamily: 'AirbnbCereal-Light',
    fontSize: 16,
    marginLeft: 6,
  },
  decor: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
    zIndex: -1,
    elevation: -1,
  },
  hero: {
    position: 'absolute',
    alignSelf: 'center',
    top: 0,
    height: screenHeight * 0.25,
    width: 'auto',
  },
});

export default HikeStyles;
