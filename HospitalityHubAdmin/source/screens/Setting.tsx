import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Setting = ({navigation}: any) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View>
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={newValue => setToggleCheckBox(newValue)}
      />
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={newValue => setToggleCheckBox(newValue)}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('TabNavigation');
        }}>
        <Text>Setting</Text>
      </TouchableOpacity>
      <Text>
        <MaterialCommunityIcons name="home-circle-outline" size={30} color="#4F8EF7" />;
      </Text>
    </View>
  );
};
export default Setting;
