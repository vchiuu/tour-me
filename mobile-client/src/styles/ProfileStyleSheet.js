import { StyleSheet } from 'react-native';

const ProfileStyles = StyleSheet.create({
  backgroundColorContainer: {
    flexDirection: 'row',
    height: 22,
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingTop: 12,
  },
  clearButton: {
    backgroundColor: 'white',
    borderRadius: 3,
    borderWidth: 1.2,
    borderColor: 'red',
    borderStyle: 'solid',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  clearButtonText: {
    color: 'red',
    fontFamily: 'AirbnbCereal-Light',
    fontSize: 15,
  },
  colorSelector: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  drawerProfileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginTop: 40,
  },
  iconContainer: {
    height: 250,
  },
  innerIconContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
  },
  galleryButton: {
    backgroundColor: '#9BD18C',
    borderRadius: 3,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: 10,
  },
  galleryButtonText: {
    color: 'white',
    fontFamily: 'AirbnbCereal-Light',
    fontSize: 15,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
  },
  profileImagePreview: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: 'center',
    backgroundColor: '#D9F1FD',
    margin: 3,
  },
  profilePicEdit: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    width: 28,
    height: 28,
    borderRadius: 28 / 2,
    transform: [{ translateX: 125 }, { translateY: -48 }],
  },
  saveButton: {
    backgroundColor: '#5FCBF7',
    borderRadius: 3,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  saveButtonText: {
    color: 'white',
    fontFamily: 'AirbnbCereal-Light',
    fontSize: 15,
  },
});

export default ProfileStyles;
