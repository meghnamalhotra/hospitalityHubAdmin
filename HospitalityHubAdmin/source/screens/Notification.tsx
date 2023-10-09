import React from 'react';
import {Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Notification = ({navigation} : any) => {
  return (
    <View>
      <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
      <Text>Notification</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Notification;