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

} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { checkUserPhrase } from "../backend/Database";
async function checkUser(pass,hash) {
    //... fetch user from a db etc.
    
  

    if(match) {
        return true;
    }

    return  false;
}
export default function Login() {
    const navigator=useNavigation();
    useEffect(()=>{
        async function checkfirstime()
        {
            const result=await AsyncStorage.getItem('isFirstEntry');
            navigator.navigate("signupScreen");
        }
        checkfirstime();
    },[])
    
    const [phrase, setPhrase] = useState("");
    const handleLogin=async ()=>{
       // AsyncStorage.removeItem("isFirstEntry");
       const result= await checkUserPhrase(phrase);
      console.log(result.length)
       //navigator.navigate("Homepage");
    }
    const  handleForgot=()=>
    {
navigator.navigate("resetPhraseScreen");
    }
    return (
        <View style={styles.container}>

            <Image style={styles.image} source={require("../assets/bot.png")} />

            <StatusBar style="auto" />

            <View style={styles.inputView}>

                <TextInput

                    style={styles.TextInput}

                    placeholder="Secret Phase"

                    placeholderTextColor="#003f5c"

                    onChangeText={(phrasetext) => setPhrase(phrasetext)}

                />

            </View>
            <TouchableOpacity onPress={handleForgot} >

                <Text style={styles.forgot_button}>Forgot Phrase ?</Text>

            </TouchableOpacity>

            <TouchableOpacity onPress={handleLogin} style={styles.loginBtn}>

                <Text style={styles.loginText}>LOGIN</Text>

            </TouchableOpacity>

        </View>

    );

}

const styles = StyleSheet.create({

    container: {

        flex: 1,

        backgroundColor: "#fff",

        alignItems: "center",

        justifyContent: "center",

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

        height: 45,

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
