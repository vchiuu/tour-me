import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import CloseButton from '../assets/images/CloseButton';
import styles from '../styles/GeneralStyleSheet';

const ContentCard = (props, { navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <TouchableOpacity onPress={toggleModal}>
        <View style={props.lightMode ? styles.contentCardLight : styles.contentCardLight}>
          <Text style={styles.contentCardTitle}>{props.title}</Text>
        </View>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible} animationIn="slideInUp" animationOut="slideOutDown">
        <View style={styles.innerModal}>
          <TouchableOpacity style={styles.modalCloseBtn} onPress={toggleModal}>
            <CloseButton />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>{props.title}</Text>
          <Text style={styles.modalBriefDescription}>{props.briefDescription}</Text>
          <View style={{ paddingVertical: 5 }} />
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Venue', { props: props })}>
            <Text style={styles.buttonText}>Start Hike</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

export default ContentCard;
