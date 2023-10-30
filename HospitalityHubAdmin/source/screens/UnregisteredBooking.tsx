import React from 'react';
import {Text, View,StyleSheet, SafeAreaView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { HotelVector } from '../assets/svgs';
import { Colors } from '../theme/colors';
import Button from '../components/Button';

const Unregistered =({navigation} : any) => {
    const handlePress = () => {
        navigation.navigate('Register')
      };
  return (
    <SafeAreaView style={styles.main}>
        <Text style={styles.topText}>
        You haven’t registered your Hotel
        </Text>
        <View style={styles.imageContainer}>
        <HotelVector />
        </View>
        <Text style={styles.bottomText}>
        List your Property for free.
        </Text>
        <View style={styles.buttonContainer}>
            <Button title={'Register Your Hotel'} onPress={handlePress}/>
        </View>
        
    </SafeAreaView>
  );
};
const styles : any = StyleSheet.create({
main: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
},
topText:{
  color: Colors.textBlue,
  fontSize: 16,
  fontWeight: '600',
},
bottomText:{
    color: Colors.textBlue,
    fontSize: 24,
    fontWeight: '600',
  },
imageContainer: {
    marginVertical: '8%',
  },
  buttonContainer: {
    width: '100%',
    position: 'absolute',
    top: '88%',
  }
})
export default Unregistered;
