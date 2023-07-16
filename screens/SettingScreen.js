import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text ,BackHandler} from 'react-native';
import { SectionRow, SettingsPage, NavigateRow, BaseRow } from 'react-native-settings-view';
import { deletediarytable, deleteusertable } from '../backend/Database';

 export default function SettingScreen() {
  const navigator=useNavigation();
//for showing confirmation while user persses delete user

const showConfirmDialog = (title,msg,onOk,) => {
  return Alert.alert(
    title,
    msg,
    [
      // The "Yes" button
      {
        text: "Yes",
        onPress: onOk,
      },
      // The "No" button
      // Does nothing but dismiss the dialog when tapped
      {
        text: "No",
        
      },
    ]
  );
};
const deletinguser=async()=>
{
  await deleteusertable();
  await deletediarytable();
  await AsyncStorage.setItem('isFirstEntry', 'false');
  BackHandler.exitApp();

}
const handleDeleteuser=async()=>
{
  showConfirmDialog("Delete User","This could mean that all the data about the user will be lost ,are you sure about deletion?",deletinguser);
  

}
const handleGoBack=()=>{
navigator.goBack();
}
const handlePrivacyPolicy=()=>{

}

   return (
     <>
<SettingsPage>
  <SectionRow title="SETTINGS" titleStyle={{backgroundColor:'white',textAlign:'center',width:'100%'}}>
    <NavigateRow
      text="User Profile"
     
      leftIcon={{
        name: 'user',
        type: 'font-awesome',
      }}
      onPress={() => navigator.navigate("userProfile")}
    />
    <NavigateRow
      text="Privacy Policy"
      leftIcon={{
        name: 'folder-lock',
        type: 'material-community',
      }}
      onPress={() => console.log('policy')}
    />
    <NavigateRow
      text="Contact us"
      leftIcon={{
        name: 'users',
        type: 'font-awesome',
      }}
      onPress={() => {navigator.navigate("contactUsScreen")}}
    />
    <NavigateRow
      text="Logout"
      leftIcon={{
        name: 'logout',
        type: 'material-community',
      }}
      onPress={()=> navigator.navigate("loginScreen")}
    />
    <NavigateRow
      text="Delete user"
      leftIcon={{
        name: 'delete',
        type: 'material-community',
      }}
      onPress={handleDeleteuser}
    />
    <NavigateRow
      text="Go Back"
      leftIcon={{
        name: 'back',
        type: 'entypo',
      }}
      onPress={handleGoBack}
    />
     {/* <CheckRow
      text="Notifications"
      checked
      leftIcon={{
        name: 'ios-notifications',
        type: 'ionicon',
      }}
      onValueChange={(isChecked) => console.log('checked', isChecked)}
    />  */}
    {/* <SwitchRow
      text="Do not disturb"
      enabled
      leftIcon={{
        name: 'do-not-disturb',
        type: 'material-community',
      }}
      onValueChange={(isEnabled) => console.log('checked', isEnabled)}
    /> */}
    <BaseRow
      text={('version')}
      leftIcon={{
        name: 'tag',
        type: 'font-awesome',
      }}
      rightContent={<Text>0.1.0</Text>}
    />
  </SectionRow>
</SettingsPage>
     </>
   )
 }
 
