import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {Colors} from '../theme/colors';
import {LocationIcon} from '../assets/svgs';
import { Search } from '../assets/svgs';
const SelectLocation = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
       <TextInput style={styles.input}
        placeholder="Search Area, Street Name........."
       />
        <Search style={styles.icon}/>
        <View style={styles.middle}>
          <LocationIcon />
          <Text style={styles.txt}>Use Current Location</Text>

        </View>
        <View style={styles.line}></View>
        <Text style={styles.txt2}>Lorem ipsum dolor sit amet, consectetur adipiscing</Text>
        <Text style={styles.txt3}>Lorem ipsum dolor sit amet, consectetur adipiscing</Text>
        <View style={styles.line}></View>
        <TextInput
        style={styles.input}
        placeholder="Base Price"
        />
        <TextInput
        style={styles.input}
        placeholder="Number of Extra Adults Allowed"
        />
       <TextInput
        style={styles.input}
        placeholder="Number of Extra Child Allowed"
        />
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
    fontSize: 16,
    paddingLeft: '12%',
    fontWeight: '600',
    backgroundColor: Colors.white,
    },
  icon: {
    marginTop: '-15%',
    marginLeft: '8%',
  },
  middle:{
    marginTop: '12%',
    flexDirection: 'row',
  },
  txt:{
    marginTop: '3%',
    fontSize: 18,
    fontWeight: '600',
    color: Colors.lighBlue,

  },
  line: {
    marginTop: '5%',
    marginLeft: '5%',
    marginRight: '5%',
    paddingVertical: '0.3%',
    backgroundColor: Colors.black,
  },
  txt2: {
    marginLeft: '5%',
    marginTop: '3%',
  },
  txt3: {
    marginLeft: '5%',
    marginTop: '1%',
  },
  bt: {
    marginTop: '8%',
        marginHorizontal: '5%',
        marginBottom: '3%',
        paddingVertical: '3%',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.lighBlue,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        activeOpacity: 0.7,
  },
  btn:{
    color: Colors.white,
    fontSize: 17,
  }
 
});
export default SelectLocation;
