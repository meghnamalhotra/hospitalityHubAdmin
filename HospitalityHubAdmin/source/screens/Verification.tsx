import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { PhoneImage } from "../assets/svgs";
import { Colors } from '../theme/colors';

const Verification = () => {
    const navigation = useNavigation<any>();
    useEffect(() => {setTimeout(() => navigation.navigate('Enter'),3000)},[]);
    return (
        <SafeAreaView style={styles.main}>
            <PhoneImage />
            <Text style={styles.text}>
            We have sent you an email{'\n'} with an account verification/{'\n'} activation link.
            </Text>
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
export default Verification;