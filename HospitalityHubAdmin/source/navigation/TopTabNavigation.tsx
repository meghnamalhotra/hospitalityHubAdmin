import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import UploadImage from "../screens/UploadImages";
const Tab = createMaterialTopTabNavigator();

const TopTabNavigation =()=>{
    return(
        <Tab.Navigator>
        <Tab.Screen name="UploadImage" component={UploadImage} />
        <Tab.Screen name="UploadImage2" component={UploadImage} />
      </Tab.Navigator>
    )
}
export default TopTabNavigation;