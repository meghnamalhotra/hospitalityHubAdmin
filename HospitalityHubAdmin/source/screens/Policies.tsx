import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button} from '../components';

const Policies = ({navigation}: any) => {
  const handlePress = () => {
    navigation.navigate('Finance');
  };
  return (
    <SafeAreaView>
      <ScrollView>
          <Text style={styles.headingTxt}>
            Select the Policies you want to implement.
          </Text>
          <View style={styles.checkBoxContainer}>
            <CheckBox />
            <Text style={styles.checkBox}>
              Free Cancellation upto 24 hours.
            </Text>
          </View>
          <View style={styles.checkBoxContainer}>
            <CheckBox />
            <Text style={styles.checkBox}>
              Free Cancellation upto 24 hours.
            </Text>
          </View>
          <View style={styles.checkBoxContainer}>
            <CheckBox />
            <Text style={styles.checkBox}>
              Free Cancellation upto 24 hours.
            </Text>
          </View>
          <View style={styles.checkBoxContainer}>
            <CheckBox />
            <Text style={styles.checkBox}>
              Free Cancellation upto 24 hours.
            </Text>
          </View>
        <Button title={'Done'} onPress={handlePress} />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  headingTxt: {
    fontWeight: 'bold',
    fontSize: 25,
    margin: 15,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  checkBox: {
    fontSize: 20,
    fontWeight: '600',
  },
});
export default Policies;
