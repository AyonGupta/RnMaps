/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow strict-local
*/

import React, {useEffect,useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import LocationService from "./Service/LocationService";
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App =  () => {
  
  const [location, Setlocation] = useState(
    {
      'longitude' : '',
      'latitude' : ''
    })
  useEffect (() => 
  {
     LocationService.GetLocation ((location) => {
      Setlocation (location)
     })

  }, [])
  
  return (
      <View style = {{height : '100%', justifyContent : 'flex-end', alignItems : 'center', paddingBottom : 64}}> 
        <Text>Hello world </Text>
        <Text> {location.location == '' ? '' : 'You are at ' + location.latitude + ', ' + location.longitude} </Text>
      </View>
  );
}
    
    export default App;
    