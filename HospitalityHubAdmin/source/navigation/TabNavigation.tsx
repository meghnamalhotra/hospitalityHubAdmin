import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import Home from '../screens/Home';
import Notification from '../screens/Notification';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
