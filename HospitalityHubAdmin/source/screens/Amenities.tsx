import React, {useState} from 'react';
import {SafeAreaView, Text, View, ScrollView, StyleSheet} from 'react-native';

import {Rectangle} from '../assets/svgs';
import CheckBox from '@react-native-community/checkbox';
import {Button} from '../components';
import {Colors} from '../theme/colors';
import { useNavigation } from '@react-navigation/native';

const Amenities = ({navigation}: any) => {
  const handlePress = () => {
    navigation.navigate('PropertyDescription');
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}></View>
        <View style={styles.container1}>
          <Rectangle />
          <Text style={styles.title}>Amenities</Text>

          <View style={styles.checkboxContainer}>
            <Text style={styles.checkboxText}>Laundry</Text>
            <CheckBox />
          </View>

          <View style={styles.checkboxContainer}>
            <Text style={styles.checkboxText}>Elevator</Text>
            <CheckBox />
          </View>

          <View style={styles.checkboxContainer}>
            <Text style={styles.checkboxText}>Air Conditioner</Text>
            <CheckBox />
          </View>

          <View style={styles.checkboxContainer}>
            <Text style={styles.checkboxText}>House Keeping</Text>
            <CheckBox />
          </View>

          <View style={styles.checkboxContainer}>
            <Text style={styles.checkboxText}>Kitchen</Text>
            <CheckBox />
          </View>

          <View style={styles.checkboxContainer}>
            <Text style={styles.checkboxText}>Wifi</Text>
            <CheckBox />
          </View>

          <View style={styles.checkboxContainer}>
            <Text style={styles.checkboxText}>Parking</Text>
            <CheckBox />
          </View>
          <View style={styles.checkboxContainer}>
            <Text style={styles.checkboxText}>Parking</Text>
            <CheckBox />
          </View>

          <View style={styles.buttonContainer}>
            <Button title={'DONE'} onPress={handlePress} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 100,
    backgroundColor: Colors.backgroundColor,
  },
  container1: {
    alignItems: 'center',
    borderRadius: 20,
    overflow: 'hidden',
    padding: 10,
  },
  title: {
    fontSize: 26,
    marginBottom: 10,
    fontWeight: '700',
    marginTop: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    justifyContent: 'space-between',
    width: '100%',
  },
  checkboxText: {
    fontSize: 18,
    marginBottom: 5,
    marginLeft: 10,
  },
  buttonContainer: {
    marginTop: 10,
    width: '90%',
    backgroundColor: Colors.buttonBlue,
    borderRadius: 20,
  },
});

export default Amenities;
