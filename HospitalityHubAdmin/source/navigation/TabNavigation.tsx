import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dimensions, Platform, Text, View} from 'react-native';
import Home from '../screens/Home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../theme/colors';
import Reviews from '../screens/Reviews';
import Dashboard from '../screens/Dashboard';
import Booking from '../screens/Booking';

const Tab = createBottomTabNavigator();

const BookingsTabIcon = (focused: boolean) =>
  focused ? (
    <MaterialCommunityIcons
      name="bookmark-check"
      color={Colors.lighBlue}
      size={30}
    />
  ) : (
    <MaterialCommunityIcons
      name="bookmark-check-outline"
      color={Colors.dullBlack}
      size={30}
    />
  );
const ReviewsTabIcon = (focused: boolean) =>
  focused ? (
    <MaterialCommunityIcons
      name="star"
      color={Colors.lighBlue}
      size={30}
    />
  ) : (
    <MaterialCommunityIcons
      name="star-outline"
      color={Colors.dullBlack}
      size={30}
    />
  );
const DashboardTabIcon = (focused: boolean) =>
  focused ? (
    <MaterialCommunityIcons
      name="view-dashboard"
      color={Colors.lighBlue}
      size={30}
    />
  ) : (
    <MaterialCommunityIcons
      name="view-dashboard-outline"
      color={Colors.dullBlack}
      size={30}
    />
  );
  
const TabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarLabelStyle: {
        fontSize: 10,
        fontWeight: '400',
        marginBottom: '5%',
      },
      tabBarStyle: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderTopWidth: 0,
        height:
          Dimensions.get('screen').height < 700
            ? '8.5%'
            : Platform.OS === 'android'
            ? '7.5%'
            : '11%',
        elevation: 0,
      },
    }}>
      <Tab.Screen
        name="Bookings"
        component={Booking}
        options={{
          headerShown: false,
          tabBarActiveTintColor: Colors.lighBlue,
          tabBarIcon: ({focused}) => BookingsTabIcon(focused),
        }}
      />
      <Tab.Screen
        name="Reviews"
        component={Reviews}
        options={{
          headerShown: false,
          tabBarActiveTintColor: Colors.lighBlue,
          tabBarIcon: ({focused}) => ReviewsTabIcon(focused),
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarActiveTintColor: Colors.lighBlue,
          tabBarIcon: ({focused}) => DashboardTabIcon(focused),
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
