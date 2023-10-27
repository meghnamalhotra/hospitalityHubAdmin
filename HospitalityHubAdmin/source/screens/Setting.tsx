import React from 'react';
import {Text, View,TouchableOpacity} from 'react-native';

const Setting = ({navigation} : any) => {
  return (
    <View>
      <TouchableOpacity onPress={()=>{navigation.navigate('SetLocation')}}>
      <Text>Setting</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Setting;
