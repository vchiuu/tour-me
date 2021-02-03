import React from 'react';
import { DrawerItem } from '@react-navigation/drawer';
import { Drawer } from 'react-native-paper';

function DrawerContent(props) {
  return (
    <Drawer.Section>
      <DrawerItem label="Home" onPress={() => props.navigation.navigate('Home')} />
      <DrawerItem label="Profile" onPress={() => props.navigation.navigate('UserProfile')} />
    </Drawer.Section>
  );
}

export default DrawerContent;
