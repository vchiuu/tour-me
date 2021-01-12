import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/GeneralStyleSheet';

const ContentCard = props => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <TouchableOpacity>
      <View style={styles.contentCard}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}