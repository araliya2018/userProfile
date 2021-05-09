import React from 'react';
import { Text, View, StyleSheet,Dimensions,TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import { Header,Icon} from 'react-native-elements';
export default class MyForestScreen extends React.Component {
  state = {
    mapRegion: null,
    hasLocationPermissions: false,
    locationResult: null
  };

  componentDidMount() {
    this._getLocationAsync();
  }

  _handleMapRegionChange = mapRegion => {
    console.log(mapRegion);
    this.setState({ mapRegion });
  };

  _getLocationAsync = async () => {
   const  { status } = await Permissions.askAsync(Permissions.LOCATION);
   if (status !== 'granted') {
     this.setState({
       locationResult: 'Permission to access location was denied',
     });
   } else {
     this.setState({ hasLocationPermissions: true });
   }

   const location = await Location.getCurrentPositionAsync({});
   this.setState({ locationResult: JSON.stringify(location) });
   // Location: {this.state.locationResult}
   // Center the map on the location we just fetched.
    this.setState({mapRegion: { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }});
  };

  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.newContainer}>
        <Header
    leftComponent={<Icon name='bars' type='font-awesome' color='#696969'  onPress={() => this.props.navigation.navigate("userAdd")}/>}

/>
</View>
        <MapView
          style={styles.mapStyle}
          region={this.state.mapRegion}
          onRegionChange={this.handleMapRegionChange}
        />
        
      </View>
   
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  newContainer: {
    flex: 0.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50,
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
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
});
