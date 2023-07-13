import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import SignupScreen from './screens/SignupScreen'
import Login from './screens/LoginScreen';
import Store from './store/store';
import { useEffect } from 'react';
import { init } from './backend/Database';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ResetPhraseScreen from './screens/ResetPhraseScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Homepage from './screens/Homepage';
import AddDiary from './screens/AddDiaryScreen';
import InitalScreen from './screens/initialScreen';
import SettingScreen from './screens/SettingScreen';
import UserProfile from './screens/UserProfile';
export default function App() {
const Stack=createStackNavigator();
  useEffect(()=>
  {
    async function initdb()
    {
await init().then(console.log("db init ok"))
    }
    initdb();
  },[])
  return (
    <Store>
      
           <SafeAreaView style={{flex: 1}}>
             <NavigationContainer>
               <Stack.Navigator initialRouteName="LoginScreen">
                 <Stack.Screen
                  name="loginScreen"
                  component={Login}
                  options={{title: 'Login'}}
                 />
                 <Stack.Screen
                  name="addDiary"
                  component={AddDiary}
                  options={{title: 'Add'}}
                 />
                 <Stack.Screen
                  name="settingsPage"
                  component={SettingScreen}
                  options={{title: ''}}
                 />
                 <Stack.Screen
                  name="homePage"
                  component={Homepage}
                  options={{title: 'Home'}}
                 />
                 <Stack.Screen
                  name="signupScreen"
                  component={SignupScreen}
                  options={{title: 'signup'}}
                 />
                  <Stack.Screen
                  name="userProfile"
                  component={UserProfile}
                  options={{title: 'about you'}}
                 />
                 <Stack.Screen
                  name="initialScreen"
                  component={InitalScreen}
                  
                  options={{title: '',headerLeft:null}}
                  
                 />
                 <Stack.Screen
                  name="resetPhraseScreen"
                  component={ResetPhraseScreen}
                  options={{title: 'reset phrase'}}
                 />
                 
               </Stack.Navigator>
             </NavigationContainer>
          </SafeAreaView>   
    </Store>
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
