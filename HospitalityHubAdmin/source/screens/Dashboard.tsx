import React from 'react';
import {Text, View,StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Dashboard =({navigation} : any) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
        //   navigation.navigate('SetLocation');
        }}>
        <Text style={style.text}>Dashboard screen here</Text>
      </TouchableOpacity>
    </View>
  );
};
const style : any = StyleSheet.create({
text:{
  fontFamily:'Poppins-Bold'
}
})
export default Dashboard;
