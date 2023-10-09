import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Notification from './Notification';
import Profile from './Profile';
import Setting from './Setting';
const Stack = createStackNavigator();
const MainScreen = () => {
  return (
    <SafeAreaView style={{flex:1}}>
     <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
     </NavigationContainer>
    </SafeAreaView>
  );
};
export default MainScreen;
