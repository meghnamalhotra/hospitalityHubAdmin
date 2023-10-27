import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { EnterImage} from "../assets/svgs";
import { Colors } from '../theme/colors';
import { Button } from '../components';

const Enter = () => {
    const navigation = useNavigation<any>();
    const handlePress = () => {
        navigation.navigate('Notification');
      };
    return (
        <SafeAreaView style={styles.main}>
            <EnterImage />
            <Text style={styles.text}>
            Yay!! We have registered your{'\n'} email with us, you can start{'\n'} registration process.
            </Text>
            <Button title={'Start Registration'} onPress={handlePress} />
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: Colors.dullBlack,
        fontSize: 18,
        textAlign: 'center',
        paddingBottom: 20,
    },
})
export default Enter;