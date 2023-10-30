import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {Colors} from '../theme/colors';
import {Location} from '../assets/svgs';
const SetLocation = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.icon}>
        <View style={styles.circle}>
          <Location style={styles.loc} />
        </View>
      </View>
      <Text style={styles.text}>Enable location</Text>
      <Text style={styles.text2}>You need to enable loaction to </Text>
      <Text style={styles.text3}>browse stays near you </Text>
      <TouchableOpacity
        style={styles.bt}
        onPress={() => {
          navigation.navigate('BasicInformation');
        }}>
        <Text style={styles.btn}>Allow Location</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bt1}
        onPress={() => {
          navigation.navigate('LikeList');
        }}>
        <Text>Enter Manually</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  circle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'lightblue',
    borderRadius: 100,
    width: '22%',
    height: '30%',
    marginTop: '50%',
  },
  loc: {
    marginTop: '10%',
  },
  text: {
    marginTop: '10%',
    marginLeft: '28%',
    fontWeight: '600',
    fontSize: 25,
  },
  text2: {
    marginTop: '10%',
    marginLeft: '15%',
    fontWeight: '400',
    fontSize: 20,
  },
  text3: {
    marginTop: '2%',
    marginLeft: '25%',
    fontWeight: '400',
    fontSize: 20,
  },
  bt: {
    marginTop: '20%',
    marginHorizontal: '5%',
    marginBottom: '3%',
    paddingVertical: '3%',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.purple,
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
  bt1: {
  marginHorizontal: '5%',
    paddingVertical: '3%',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightgray,
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
  btn: {
    color: Colors.white,
  },
});
export default SetLocation;
