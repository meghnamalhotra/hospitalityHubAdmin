import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Notification from '../screens/Notification';
import Profile from '../screens/Profile';
import Setting from '../screens/Setting';
import TabNavigator from './TabNavigation';
import Register from '../screens/Register';
import LikeList from '../screens/LikeList';
const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name ="LikeList" component={LikeList}/>
          <Stack.Screen name="Setting" component={Setting} />
          <Stack.Screen name="TabNavigation" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
export default StackNavigation;
