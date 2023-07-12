import React from 'react';
import { View, StyleSheet, Text, Alert, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 50,
    color: '#000',
  },
  headingcontainer:{
width:'100%',
height:100,

  },
  heading:{
    fontSize:33,
    textAlign:'left',
    fontWeight:'900',
fontFamily:'monospace',
padding:10,
paddingBottom:0
  },
  subheading:{
    paddingRight:25,
fontSize:33,
textAlign:"right",
color:'red',
fontWeight:'bold',
fontFamily:'monospace'
  },
  iconCon:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    gap:29,
  },
  bar:{
    height:15,
    backgroundColor:'black',
    marginTop:15,
    width:'90%',
    alignSelf:'center',
    borderRadius:10,
  }
});

const InitalScreen = () => {
  const navigator=useNavigation();
  navigator.addListener('beforeRemove',(e)=>{
    e.preventDefault();
    Alert.alert("cannot go back");

    return false;
  })
  return (
    <>
    <View style={styles.headingcontainer}>
      <Text style={styles.heading}>KEEP YOUR  SECRETS</Text>
      <Text style={styles.subheading}>SAFE</Text>
      <Text style={styles.bar}/>
      </View>
    <View style={styles.container}>
      
      
      <View style={styles.iconCon}>
        <Pressable>
        <Ionicons name="settings" size={24} color="black"  style={styles.icon}/>
      </Pressable>
      <Pressable>
      <Entypo name="calendar" size={24} color="black" style={styles.icon} />
      </Pressable>
      <Pressable>
      <Ionicons name="add-circle" size={24} color="black" style={styles.icon}/>
      </Pressable>
      <Pressable>
      <FontAwesome name="user-circle-o" size={24} color="black" style={styles.icon} />
      </Pressable>
      </View>
    </View>
    </>
  );
};

export default InitalScreen;