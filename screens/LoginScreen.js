import { StatusBar } from "expo-status-bar";
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from "react";
import { AntDesign } from '@expo/vector-icons';
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
            console.log(result+"first entry")
            if(result==null)
            navigator.navigate("signupScreen");
        }
        checkfirstime();
    },[])
    
    const [phrase, setPhrase] = useState("");
    const handleLogin=async ()=>{
       // AsyncStorage.removeItem("isFirstEntry");
       const result= await checkUserPhrase(phrase);
     if(result.length==0||result.length==null)
     {

        Alert.alert("Invald phrase","The phrase given does not in the database,check your phrase");
     }
     else
      navigator.navigate("initialScreen");
    }
    const  handleForgot=()=>
    {
navigator.navigate("resetPhraseScreen");
    }
    return (
        <View style={styles.container}>

<AntDesign name="book" style={styles.image} size={174} color="black" />

            <StatusBar style="auto" />

            <View style={styles.inputView}>

                <TextInput

                    style={styles.TextInput}

                    placeholder="Secret Phase"

                    placeholderTextColor="white"

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
        alignSelf:'center',
   

    },

    inputView: {

        backgroundColor: "gray",

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
        color:"white"

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
        color:"white",
        backgroundColor: "black",
        minWidth:200,

    },
    loginText:{
        color:'white'
    }

});
