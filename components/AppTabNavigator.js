import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import userProfile from '../screens/userProfile';
import userAdd from '../screens/userAdd';

import MapScreen from '../screens/MapScreen'

export const AppTabNavigator = createBottomTabNavigator({
  
 userAdd: {
    screen: userAdd,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-book.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Add User",
    }
  },
  userProfile: {
    screen: userProfile,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "profile",
    }
  }, 
  MapScreen : {
    screen: MapScreen ,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Location",
    }
  }

});
