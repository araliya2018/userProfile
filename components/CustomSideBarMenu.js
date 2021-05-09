import React, { Component} from 'react';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import { DrawerItems} from 'react-navigation-drawer'
import { Icon } from "react-native-elements";

import { RFValue } from "react-native-responsive-fontsize";

import firebase from 'firebase';

export default class CustomSideBarMenu extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <View style={styles.drawerItemsContainer}>
          <DrawerItems {...this.props}/>
        </View>
        <View style={{ flex: 0.1 }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              width: "100%",
              height: "100%",
            }}
            onPress={() => {
              this.props.navigation.navigate("WelcomeScreen");
              firebase.auth().signOut();
            }}
          >
            <Icon
              name="logout"
              type="antdesign"
              size={RFValue(20)}
              iconStyle={{ paddingLeft: RFValue(10) }}
            />

            <Text
              style={{
                fontSize: RFValue(15),
                fontWeight: "bold",
                marginLeft: RFValue(30),
              }}
            >
              Log Out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container : {
    flex:1
  },
  drawerItemsContainer:{
    flex:0.8, marginTop:100
  },
  logOutContainer : {
    flex:0.2,
    justifyContent:'flex-end',
    paddingBottom:30
  },
  logOutButton : {
    height:30,
    width:'100%',
    justifyContent:'center',
    padding:10
  },
  logOutText:{
    fontSize: 30,
    fontWeight:'bold'
  }
})
