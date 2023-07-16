import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable, Button ,TextInput} from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import Modal from "react-native-modal";
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { changeusercredentials, getuserData } from '../backend/Database';
export default UserProfile = () => {
  const [profileurl,setprofileurl]=useState(null);
  const[email,setemail]=useState('');
  const [name,setname]=useState('');
   const [buttonvisible,setvisible]=useState(false);
  useEffect(()=>{
   async  function getprofile()
   {
   const imageurl=await AsyncStorage.getItem('userProfileImage');
   setprofileurl(imageurl);
   var userdetails=await getuserData();
   userdetails=userdetails.rows._array[0];
   
   setemail(userdetails.email);
   setname(userdetails.name);
   }
  getprofile();
  
  },[])
 const handleuserdetailchanage=async()=>{
   const result =await changeusercredentials(email,name);
   setvisible(false);
 }
  const handlepickImage=async ()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
if(!result.canceled)
{
setprofileurl(result.assets[0].uri);
await AsyncStorage.setItem("userProfileImage",result.assets[0].uri);
}
  }
  return (
    <View style={styles.containermodal}>
       <Modal  isVisible={buttonvisible}style={styles.containermodal}  backdropColor='white'
       >
        <View style={styles.container}>
      <AntDesign name="user" size={114} color="black" style={styles.image} />
        <TextInput
          style={[styles.inputView, styles.loginText]}
          value={email}
          placeholderTextColor={'white'}
          placeholder={email}
          onChangeText={(text) => setemail(text)}
          autoCapitalize={"none"}
        />
        <TextInput
          style={[styles.inputView, styles.loginText]}
          value={name}
          placeholder={name}
          placeholderTextColor={'white'}
          onChangeText={(text) => setname(text)}
          autoCapitalize={"none"}
        />
  
        <View style={styles.loginBtn}>
          <Button title={"Save"}  color={'black'}  onPress={handleuserdetailchanage} />
        </View>
      </View>
      </Modal>
      <View style={styles.header}><Text style={styles.text}></Text></View>
       
      <Image
        style={styles.avatar}
        
        source={{ uri: profileurl?profileurl:'https://bootdey.com/img/Content/avatar/avatar6.png'} }
      />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.info}>UX Designer / Mobile developer</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis,
            omittam deseruisse consequuntur ius an,
          </Text>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.text}>{name} </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.text}>{email} </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.text}>Age: </Text>
          </TouchableOpacity> */}
          <TouchableOpacity style={styles.buttonContainer}>
            <Button title='Edit profile Image' onPress={handlepickImage} color={'black'} ></Button>
          
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Button title='Edit Details' onPress={()=>setvisible(true)} color={'black'} ></Button>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containermodal:{
    flex: 1,
    backgroundColor:'white',
    marginTop:0,
    borderRadius:20,
   borderColor:'pink',
   borderWidth:2,
  
  },
  image:{
    alignSelf:"center",
  },
  loginText:{
    color: 'white',
    fontFamily:'monospace',
    fontSize:19
  },
  inputView:{

    backgroundColor: "black",
    minHeight:50,
    margin: 20,
    
    alignSelf: 'flex-end',
    borderBottomLeftRadius: 20,
    borderRadius: 20,
    width: "90%",

    height: 45,

    marginBottom: 20,
    alignItems: "center",
    textAlign: 'center'
  },
  loginBtn:{
    width: "90%",
    borderRadius: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
alignSelf:'center',
    marginTop: 40,
    color: "white",
    backgroundColor: "white",
    minWidth: 200,
  },
  text:{

  },
  header: {
    backgroundColor: 'black',
    height: 200,
  },
  avatar: {
    width: 180,
    height: 180,
    borderRadius:88,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 110,
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: '600',
  },
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width:'95%',
    borderRadius: 5,
    backgroundColor: 'black',
    elevation:9,
    shadowColor:'violet',
  
 
    
  },
  imagecon:{
marginTop:-40
  },
  text:{
color:'white',
textAlign:'center',
  }
})