import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Colors } from '../theme/colors';
import { Button } from '../components';

const Likelist = ({navigation}: any) => {
  return (
    <SafeAreaView>
        <ScrollView>
      <View style={{backgroundColor:Colors.backgroundColor}}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>What you like to List?</Text>
        </View>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.buttonTxt}>Hotel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.buttonTxt}>Resort</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.buttonTxt}>Bungalow</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.buttonTxt}>Dorm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.buttonTxt}>Cottage </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.buttonTxt}>Appartment</Text>
        </TouchableOpacity>
        <View style={styles.headingContainer}>
        <Text style={styles.heading}>Now would you like to set the Property</Text>
        </View>
        <Button title={'Continue'}  />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Setting');
          }}>
          <Text>Likelist</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  headingContainer: {marginVertical: 15, marginLeft: 20},
  heading: {fontWeight: 'bold', fontSize: 25},
  buttons: {
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor:Colors.white
  },
  buttonTxt:{fontWeight: 'bold', fontSize: 20}
});
export default Likelist;
