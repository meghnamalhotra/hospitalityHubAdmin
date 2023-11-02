import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import UploadImage from "../screens/UploadImages";
import ExteriorImage from "../screens/ExteriorImage";
const Tab = createMaterialTopTabNavigator();

const TopTabNavigation =()=>{
    return(
        <Tab.Navigator>
        <Tab.Screen name="ExteriorImage" component={ExteriorImage} />
        <Tab.Screen name="UploadImage" component={UploadImage} />
      </Tab.Navigator>
    )
}
export default TopTabNavigation;