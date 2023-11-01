import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Colors} from '../theme/colors';
import {Button, Checkbox} from '../components';
import RadioButton from '../components/RadioButton';

const Likelist = ({navigation}: any) => {
  const handlePress = () => {
    navigation.navigate('BasicInformation');
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{backgroundColor: Colors.backgroundColor}}>
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
            <Text style={styles.heading}>
              Now would you like to set the Property
            </Text>
          </View>
          <View style={{}}>
          <RadioButton />
          </View>
          <View style={styles.btncontainer}>
            <Button title={'Next'} onPress={handlePress} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  headingContainer: {
    marginVertical: 15,
    marginLeft: 20,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 25,
    color: Colors.black,
  },
  buttons: {
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: Colors.white,
  },
  buttonTxt: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.black,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    margin: 20,
  },
  checkboxTxt: {
    marginHorizontal: 20,
    fontWeight: '500',
    color: Colors.black,
    fontSize: 17,
  },
  btncontainer: {marginBottom: 20},
});
export default Likelist;
