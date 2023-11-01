import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Notification from '../screens/SetLocation';
import Profile from '../screens/Profile';
import Setting from '../screens/Setting';
import TabNavigator from './TabNavigation';
import Register from '../screens/Register';
import LikeList from '../screens/LikeList';
import Verification from '../screens/Verification';
import Enter from '../screens/Enter';
import Login from '../screens/Login';
import SetLocation from '../screens/SetLocation';
import Amenities from '../screens/Amenities';
import Policies from '../screens/Policies';
import Finance from '../screens/Finance&Legal';
import BasicInformation from '../screens/BasicInformation';
import RoomDescription from '../screens/RoomDescription';
import SelectLocation from '../screens/SelectLocation';
import FinalVerification from '../screens/FinalVerificaiton';
import PropertyDescription from '../screens/PropertyDescription';
import UploadImage from '../screens/UploadImages';
import TopTabNavigation from './TopTabNavigation';
import ProfilePage from '../screens/ProfilePage';
const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Verification" component={Verification} />
          <Stack.Screen name="Enter" component={Enter} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SetLocation" component={SetLocation} />
          <Stack.Screen name="SelectLocation" component={SelectLocation} />
          <Stack.Screen name="BasicInformation" component={BasicInformation} />
          <Stack.Screen name="Amenities" component={Amenities} />
          <Stack.Screen name="RoomDescription" component={RoomDescription} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="LikeList" component={LikeList} />
          <Stack.Screen name="Setting" component={Setting} />
          <Stack.Screen name="TabNavigation" component={TabNavigator} />
          <Stack.Screen name="Policies" component={Policies} />
          <Stack.Screen name="Finance" component={Finance} />
          <Stack.Screen name="FinalVerification" component={FinalVerification} />
          <Stack.Screen name="PropertyDescription" component={PropertyDescription} />
          <Stack.Screen name="UploadImage" component={UploadImage} />
          <Stack.Screen name="TopTabNavigation" component={TopTabNavigation} />
<<<<<<< Updated upstream
          <Stack.Screen name="ProfilePage" component={ProfilePage} />

          

=======
>>>>>>> Stashed changes
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
export default StackNavigation;
