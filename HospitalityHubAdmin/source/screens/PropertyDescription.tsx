import React from 'react';
import {Colors} from '../theme/colors';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import {Button} from '../components';
import RadioButton from '../components/RadioButton';
const PropertyDescription = ({navigation}: any) => {
  const handlePress = () => {
    navigation.navigate('RoomDescription');
  };
  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor: Colors.backgroundColor}}>
        <TextInput
          style={styles.input}
          placeholderTextColor="#949494"
          placeholder="Room Area"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#949494"
          placeholder="Accommodation Only"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#949494"
          placeholder="Property Size"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#949494"
          placeholder="Select Extra Bed Types"
        />
        <Text style={styles.options}>Cupboard</Text>
        <RadioButton label1={'Yes'} label2={'No'} Direction={'row'} />

        <Text style={styles.options}>Wardrobe</Text>
        <RadioButton label1={'Yes'} label2={'No'} Direction={'row'} />
        <Text style={styles.options}>Accommodation Only</Text>
        <RadioButton label1={'Yes'} label2={'No'} Direction={'row'} />
        <Text style={styles.options}>Free Breakfast</Text>
        <RadioButton label1={'Yes'} label2={'No'} Direction={'row'} />
        <Text style={styles.options}>Free Lunch</Text>
        <RadioButton label1={'Yes'} label2={'No'} Direction={'row'} />
        <Text style={styles.options}>Free Dinner</Text>
        <RadioButton label1={'Yes'} label2={'No'} Direction={'row'} />
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
  options: {
    margin: 15,
    fontWeight: '600',
    color: Colors.black,
    fontSize: 22,
  },
});
export default PropertyDescription;
