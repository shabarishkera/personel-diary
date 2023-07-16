import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';
import { SectionRow, SettingsPage, NavigateRow, BaseRow } from 'react-native-settings-view';

 export default function SettingScreen() {
  const navigator=useNavigation();
const handleDeleteuser=()=>
{
  //remove all details of the user,
  //remove all data from the diarydata
  //set asucstroage for isfirshitem and userimage to null

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
 
