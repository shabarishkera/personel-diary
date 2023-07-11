import { StatusBar } from "expo-status-bar";
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from "react";

import {
    StyleSheet,
    Text,

    View,

    Image,

    TextInput,

    Button,

    TouchableOpacity,
    Alert,

} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { checkUserPhrase } from "../backend/Database";

export default function AddDiary() {
    const navigator=useNavigation();
    useEffect(()=>{
       
    },[])
    
    const [dairy,setdiary] =useState("");
    const handlesave=async ()=>{
      
    
    }
    return (
        <>
        <Text

style={[styles.Text,]}

placeholder="Secret Phase"

placeholderTextColor="#003f5c"

// onChangeText={(phrasetext) => setPhrase(phrasetext)}

/>
        <View style={styles.container}>


            <StatusBar style="auto" />
            
            <View style={styles.inputView}>

                
                 <TextInput

style={styles.TextInput}

placeholder="write something here"

placeholderTextColor="#003f5c"

onChangeText={(phrasetext) => setdiary(phrasetext)}

/>

            </View>
           

            <TouchableOpacity onPress={handlesave} style={styles.loginBtn}>

                <Text style={styles.loginText}>SAVE</Text>

            </TouchableOpacity>

        </View>
        </>
    );

}

const styles = StyleSheet.create({

    container: {

        flex: 1,

        backgroundColor: "#fff",

        alignItems: "center",

        justifyContent: "center",

    },
    Text:{
        height: 150,
       
        width:200,
        textAlign:"center",
        right:0,
        padding: 10,
        marginRight:-29,
        marginTop:20,
        alignSelf:'flex-start',
        backgroundColor:'black'
        
    },

    image: {

        marginBottom: 40,
        width:200,
        height:200

    },

    inputView: {

        backgroundColor: "#FFC0CB",

        borderRadius: 30,

        width: "90%",

        minHeightheight:300,
        

        marginBottom: 20,

        alignItems: "center",

    },

    TextInput: {

        height: 50,

        flex: 1,
        width:200,
        textAlign:"center",

        padding: 10,

        marginLeft: 20,

    },

    forgot_button: {

        height: 30,

        marginBottom: 30,

    },

    loginBtn: {

        width: "80%",

        borderRadius: 25,

        height: 50,

        alignItems: "center",

        justifyContent: "center",

        marginTop: 40,

        backgroundColor: "#FF1493",
        minWidth:200,

    },

});
