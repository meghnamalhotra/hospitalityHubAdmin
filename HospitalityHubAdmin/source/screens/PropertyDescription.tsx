import React from 'react';
import {Colors} from '../theme/colors';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Button, Checkbox} from '../components';
const PropertyDescription = ({navigation}: any) => {
  const handlePress = () => {
    navigation.navigate('RoomDescription');
  };
  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor:Colors.backgroundColor}}>
        <TextInput style={styles.input} placeholderTextColor="#949494" placeholder="Room Area" />
        <TextInput style={styles.input} placeholderTextColor="#949494" placeholder="Accommodation Only" />
        <TextInput style={styles.input} placeholderTextColor="#949494" placeholder="Property Size" />
        <TextInput style={styles.input} placeholderTextColor="#949494" placeholder="Select Extra Bed Types" />
        <Text style={styles.options}>
          Cupboard
        </Text>
        <View style={styles.CheckBoxContainer}>
          <View style={styles.checkBoxInput}>
            <Checkbox />
            <Text style={styles.checkBoxTxt}>Yes</Text>
          </View>
          <View style={styles.checkBoxInput}>
            <Checkbox />
            <Text style={styles.checkBoxTxt}>No</Text>
          </View>
        </View>
        <Text style={styles.options}>
          Wardrobe
        </Text>
        <View style={styles.CheckBoxContainer}>
          <View style={styles.checkBoxInput}>
            <Checkbox />
            <Text style={styles.checkBoxTxt}>Yes</Text>
          </View>
          <View style={styles.checkBoxInput}>
            <Checkbox />
            <Text style={styles.checkBoxTxt}>No</Text>
          </View>
        </View>
        <Text style={styles.options}>
          Accommodation Only
        </Text>
        <View style={styles.CheckBoxContainer}>
          <View style={styles.checkBoxInput}>
            <Checkbox />
            <Text style={styles.checkBoxTxt}>Yes</Text>
          </View>
          <View style={styles.checkBoxInput}>
            <Checkbox />
            <Text style={styles.checkBoxTxt}>No</Text>
          </View>
        </View>
        <Text style={styles.options}>
          Free Breakfast
        </Text>
        <View style={styles.CheckBoxContainer}>
          <View style={styles.checkBoxInput}>
            <Checkbox />
            <Text style={styles.checkBoxTxt}>Yes</Text>
          </View>
          <View style={styles.checkBoxInput}>
            <Checkbox />
            <Text style={styles.checkBoxTxt}>No</Text>
          </View>
        </View>
        <Text style={styles.options}>
          Free Lunch
        </Text>
        <View style={styles.CheckBoxContainer}>
          <View style={styles.checkBoxInput}>
            <Checkbox />
            <Text style={styles.checkBoxTxt}>Yes</Text>
          </View>
          <View style={styles.checkBoxInput}>
            <Checkbox />
            <Text style={styles.checkBoxTxt}>No</Text>
          </View>
        </View>
        <Text style={styles.options}>Free Dinner</Text>
        <View style={styles.CheckBoxContainer}>
          <View style={styles.checkBoxInput}>
            <Checkbox />
            <Text style={styles.checkBoxTxt}>Yes</Text>
          </View>
          <View style={styles.checkBoxInput}>
            <Checkbox />
            <Text style={styles.checkBoxTxt}>No</Text>
          </View>
        </View>
        <Button title="Next" onPress={handlePress} />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    height: 70,
    margin: 12,
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
    backgroundColor: Colors.white,
    color: Colors.black,
  },
  CheckBoxContainer: {
    flexDirection: 'row',
    marginHorizontal: 50,
    color: Colors.black,
  },
  checkBoxInput: {
    padding: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 10,
    color: Colors.black,
  },
  checkBoxTxt: {
    marginHorizontal: 20,
    margin: 7,
    fontSize:17,
    color: Colors.black,
  },
  options: {
    margin: 15,
    fontWeight: '600',
    color: Colors.black,
     fontSize: 22
    },
});
export default PropertyDescription;
