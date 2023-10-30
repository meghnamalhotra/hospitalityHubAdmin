import React, {useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView, Dimensions} from 'react-native';
import {KeyVector} from '../assets/svgs';
import {Colors} from '../theme/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Card from '../components/BookingCard';

const Booking = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sort</Text>
          <MaterialCommunityIcons
            name="filter-variant"
            color={Colors.dullBlack}
            size={25}
            />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Filter</Text>
          <MaterialCommunityIcons
            name="filter-outline"
            color={Colors.dullBlack}
            size={25}
            />
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <Text style={styles.heading}>
            Today
        </Text>
        <Card date={'30 Oct 2023'} id={13932731109} people={3} nights={2} payment={8000} roomType='Triple' checkIn='14 Nov 2023' checkOut='17 Nov 2023'/>
      </View>
    </SafeAreaView>
  );
};

const styles: any = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  buttonContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: '3%',
    left: '5%',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    paddingHorizontal: '10%',
    paddingVertical: '3%',
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 25,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginRight: '5%',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.black,
  },
  cardContainer: {
    flex: 0.8,
    marginTop: Dimensions.get('screen').height * 0.08,
    marginHorizontal: '4%',
  },
  heading: {
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'left',
  },
});
export default Booking;
