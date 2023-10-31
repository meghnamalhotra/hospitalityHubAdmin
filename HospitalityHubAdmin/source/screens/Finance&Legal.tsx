import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../theme/colors';
import {Button, Checkbox} from '../components';
import { FileDocument } from '../assets/svgs';
const Finance = ({navigation}: any) => {
  const handlePress = () => {
    navigation.navigate('FinalVerification');
  };
  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor: Colors.backgroundColor}}>
        <TextInput style={styles.input} placeholderTextColor="#949494" placeholder="PAN Details" />
        <TextInput style={styles.input} placeholderTextColor="#949494" placeholder="Property Information" />
        <TextInput style={styles.input} placeholderTextColor="#949494" placeholder="GST Details" />
        <Text style={styles.containerHeading}>Property Information</Text>
        <Text style={styles.containerDetail}>
          Is your property owned or leased
        </Text>
        <View style={styles.CheckBoxContainer}>
          <View style={styles.checkBoxInput}>
            <Checkbox />
            <Text style={styles.checkBoxTxt}>Owned</Text>
          </View>
          <View style={styles.checkBoxInput}>
            <Checkbox />
            <Text style={styles.checkBoxTxt}>Leased</Text>
          </View>
        </View>
        <Text style={styles.containerDetail}>Do you have registration</Text>
        <View style={styles.CheckBoxContainer}>
          <View style={styles.checkBoxInput}>
            <Checkbox />
            <Text style={styles.checkBoxTxt}>Yes       </Text>
          </View>
          <View style={styles.checkBoxInput}>
            <Checkbox />
            <Text style={styles.checkBoxTxt}>No</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.documnet}>
          <View style={{alignItems: 'center'}}>
            <FileDocument/>
            <Text>Upload Registration</Text>
          </View>
        </TouchableOpacity>
        <Button title={'Done'} onPress={handlePress} />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 70,
    margin: 12,
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
    backgroundColor: Colors.white,
  },
  containerHeading: {
    fontSize: 18,
    margin: 16,
    fontWeight: 'bold',
    color: Colors.black,
  },
  containerDetail: {
    fontSize: 15,
    marginHorizontal: 16,
    color: Colors.black,
  },
  CheckBoxContainer: {
    flexDirection: 'row',
    marginHorizontal:50,
    color: Colors.black,
  },
  checkBoxInput: {
    padding:10,
    justifyContent:'space-between',
    flexDirection: 'row',
    marginVertical: 30,
    color: Colors.black,
  },
  checkBoxTxt: {
    marginHorizontal: 20,
    margin: 7,
    color: Colors.black,
  },
  documnet:{
    padding: 60,
    backgroundColor: Colors.lightgray,
    margin: 20,
    borderRadius: 5,
    color: Colors.black,
  },
});
export default Finance;
