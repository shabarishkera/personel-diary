import { StatusBar } from 'expo-status-bar';
import React, { useEffect} from 'react';

import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View,} from 'react-native';
//import FirstScreen from './screens/initialScreen';
//import { init } from './backend/Database';
import {Store} from './store/store'
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import Login from './screens/LoginScreen';
export  default  async function App() {
  
  const stack=createStackNavigator();
  //const navigation=useNavigation();
useEffect(async ()=>{
  //await init().then(console.log("db creation success")).catch("error in db creation ");
//   try
//   {
//   const inital=AsyncStorage.getItem('isFirstEntry');
//   if(inital==null)
//   {
//     navigation.navigate('SignupScreen');
//   }
//   }
//   catch (err)
// {
//   console.log("Init function not working ")
// }
//code to initalise database and check for 
//inital loading and if yes  got to intr screen
},[])

  return (
    <stack.Navigator>
    <View style={styles.container}>
      {/* <Store>
     <Text >hello</Text>
    </Store> */}
    </View>
    </stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
