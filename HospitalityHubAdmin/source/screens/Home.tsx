import React from 'react';
import {Text, View,StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Home =({navigation} : any) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SetLocation');
        }}>
        <Text style={style.text}>home screen here</Text>
      </TouchableOpacity>
    </View>
  );
};
const style : any = StyleSheet.create({
text:{
  fontFamily:'Poppins-Bold'
}
})
export default Home;
