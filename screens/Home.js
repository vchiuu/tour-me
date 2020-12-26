import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';

const Home = () => {
    const modalizeRef = useRef(null);

    const onOpen = () => {
        modalizeRef.currrent?.open();
    };
    return (
        <>
            <TouchableOpacity onPress={onOpen}>
                <Text>Open the modal</Text>
            </TouchableOpacity>
            <Modalize ref={modalizeRef}>
                <Text> Test Content </Text>
            </Modalize>
        </>
    )
}

export default Home;