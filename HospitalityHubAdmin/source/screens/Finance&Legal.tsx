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
import {Button} from '../components';
import {FileDocument} from '../assets/svgs';
import RadioButton from '../components/RadioButton';
const Finance = ({navigation}: any) => {
  const handlePress = () => {
    navigation.navigate('FinalVerification');
  };
  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor: Colors.backgroundColor}}>
        <TextInput
          style={styles.input}
          placeholderTextColor="#949494"
          placeholder="PAN Details"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#949494"
          placeholder="Property Information"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#949494"
          placeholder="GST Details"
        />
        <Text style={styles.containerHeading}>Property Information</Text>
        <Text style={styles.containerDetail}>
          Is your property owned or leased
        </Text>
        <View style={{margin: 20}}>
          <RadioButton label1={'Owned'} label2={'Leased'}  Direction={'row'} />
        </View>
        <Text style={styles.containerDetail}>Do you have registration</Text>
        <View style={{marginVertical: 20}}>
        <RadioButton label1={'Yes'} label2={'No'} Direction={'row'} />
        </View>
        <TouchableOpacity style={styles.documnet}>
          <View style={{alignItems: 'center'}}>
            <FileDocument />
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
  documnet: {
    padding: 60,
    backgroundColor: Colors.lightgray,
    margin: 20,
    borderRadius: 5,
    color: Colors.black,
  },
});
export default Finance;
