import React from 'react';
import {Text, View,TouchableOpacity, SafeAreaView} from 'react-native';

const Profile = ({navigation} : any) => {
  return (
    <SafeAreaView>
     <TouchableOpacity onPress={()=>{navigation.navigate('LikeList')}}>
      <Text>Profile</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Profile;
