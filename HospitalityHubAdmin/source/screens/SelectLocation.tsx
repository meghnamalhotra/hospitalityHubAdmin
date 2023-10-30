import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {Colors} from '../theme/colors';
import {Location} from '../assets/svgs';
const SelectLocation = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
        <View   style={styles.input}>
       <TextInput
        style={styles.input}
        placeholder="Base Price"
        />
        </View>
      <TouchableOpacity
        style={styles.bt}
        onPress={() => {
          navigation.navigate('Amenities');
        }}>
        <Text style={styles.btn}>Allow Location</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  input: {
    height: '10%',
    margin: '4%',
    borderWidth: 1,
    padding: '2%',
    borderRadius: 10,
    borderColor: '#ACACAC',
    fontSize: 20,
    paddingLeft: '6%',
    fontWeight: '600',
    },
 
});
export default SelectLocation;
