import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Home =({navigation} : any) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Notification');
        }}>
        <Text>home screen</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Home;
