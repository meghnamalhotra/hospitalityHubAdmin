import React from 'react';
import {Text, View,TouchableOpacity} from 'react-native';

const Profile = ({navigation} : any) => {
  return (
    <View>
     <TouchableOpacity onPress={()=>{navigation.navigate('Setting')}}>
      <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Profile;
