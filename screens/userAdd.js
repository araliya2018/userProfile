import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { Image } from 'react-native';
export default class UserAdd extends Component{
  constructor(){
    super();
    this.state ={
      userId : firebase.auth().currentUser.email,
     name:"",
     age:"",
     hobbies:"",
     contact:"",
     image: "#",
     
    }
  }

  createUniqueId(){
    return Math.random().toString(36).substring(7);
  }



  addUser =()=>{
    
    db.collection('userDetails').add({
      "name": this.state.name,
      "age" : this.state.age,
      "hobbies"   : this.state.hobbies,
      "contact"   : this.state.contact,
    })

    Alert.alert("Profile Updated Successfully")



  }

  selectPicture = async () => {
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!cancelled) {
      this.uploadImage(uri, this.state.userId);
    }
  };

  uploadImage = async (uri, imageName) => {
    var response = await fetch(uri);
    var blob = await response.blob();

    var ref = firebase
      .storage()
      .ref()
      .child("user_profiles/" + imageName);

    return ref.put(blob).then((response) => {
      this.fetchImage(imageName);
    });
  };

  
  

  render(){
    return(
        <View style={{flex:1}}>
          <MyHeader title="Add details" style={styles.heading}/>
            <KeyboardAvoidingView style={styles.keyBoardStyle}>

            <LinearGradient
        // Background Linear Gradient
        colors={['#00ffff', 'transparent']}
        style={styles.background}
      />

              <TextInput
                style ={styles.formTextInput}
                placeholder={"enter the name here"}
                onChangeText={(text)=>{
                    this.setState({
                        name:text
                    })
                }}
                value={this.state.name}
              />
              
             <TextInput
                style ={styles.formTextInput}
                placeholder={"enter age"}
                onChangeText={(text)=>{
                    this.setState({
                        age:text
                    })
                }}
                value={this.state.age}
              />
              <TextInput
                style ={styles.formTextInput}
                placeholder={"enter age"}
                onChangeText={(text)=>{
                    this.setState({
                        contact:text
                    })
                }}
                value={this.state.contact}
              />

              <TextInput
                style ={styles.formTextInput}
                placeholder={"enter hobbies"}
                onChangeText ={(text)=>{
                    this.setState({
                     hobbies:text
                    })
                }}
                value ={this.state.hobbies}
              />


              <TouchableOpacity
                
                onPress={()=>{this.selectPicture()}}>
                
                <Image style={{width:100,height:100,marginTop:20}} source={require("../assets/upload.png")}/>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={()=>{this.addUser()}}
                >
                <Text style={styles.text}>Save User</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  keyBoardStyle : {
    flex:1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10,
  },
  button:{
    width:"45%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:12,
    backgroundColor:"#FD5858",
    shadowColor: "#03BFB8",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation:16,
    marginTop:50
    },
    text:{
      fontSize:30,
     
    },
  
  
  }
)