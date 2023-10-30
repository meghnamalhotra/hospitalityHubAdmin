import React, { useState } from 'react';
import {Text, View,StyleSheet, SafeAreaView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { HotelVector, KeyVector } from '../assets/svgs';
import { Colors } from '../theme/colors';
import Button from '../components/Button';
import Unregistered from './UnregisteredBooking';

const Booking =({navigation} : any) => {
    const[registered, setRegistered] = useState(true);
    const handlePress = () => {
        navigation.navigate('Register')
      };

    if(!registered){
        return <Unregistered/>
    }else{
        return (
            <SafeAreaView style={styles.main}>
                <KeyVector />
                <Text style={styles.heading}>
                    Your Bookings
                </Text>
                <Text style={styles.subHeading}>
                    Currently you have no Bookings
                </Text>
            </SafeAreaView>
          );
    }
};
const styles : any = StyleSheet.create({
main: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
},
heading:{
    color: Colors.black,
  fontSize: 34,
  fontWeight: '700',
},
subHeading:{
    color: Colors.black,
    fontSize: 18,
    fontWeight: '300',
    paddingTop: '4%',
  },
imageContainer: {
    marginVertical: '8%',
  },
  buttonContainer: {
    width: '100%',
    position: 'absolute',
    top: '88%',
  }
})
export default Booking;
