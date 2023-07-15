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
import { addDiary, checkUserPhrase } from "../backend/Database";
import { ScrollView } from "react-native-gesture-handler";

export default function AddDiary() {
    const navigator = useNavigation();
    const date=new Date();
    console.log(date.getDate().toLocaleString().length);
    var dateFormat = date.getFullYear() + "-" +((date.getMonth()+1).length != 2 ? "0" + (date.getMonth() + 1) : (date.getMonth()+1)) + "-" + (date.getDate().toLocaleString().length != 2 ?"0" + date.getDate() : date.getDate());
    const [dateval,setdate]=useState('');
    const [dairy, setdiary] = useState("");
    useEffect(() => {
setdate(dateFormat);
    }, [])
  
    const handlesave = async () => {
        //validate the input
        if(dairy.length<=5)
        {
            Alert.alert("Invalid Entry","The diary must be atleast 6 characters");
            return;
        }
       const result= await addDiary(dateval,date.getFullYear(),date.getDay()+"",dairy);
       
       console.log(result);
        navigator.navigate("initialScreen");

    }
    return (
        <>
        <ScrollView style={{flex:1,gap:20}} collapsable={true}>
            <Text

                style={styles.text}

            >{dateval}</Text>
            <View style={styles.container}>


                <StatusBar style="auto" />

                <View style={styles.inputView}>

                    <TextInput
                            multiline={true}
                        style={styles.TextInput}
                        

                        placeholder="write something here"

                        placeholderTextColor="gray"

                        onChangeText={(phrasetext) => setdiary(phrasetext)}

                    />

                </View>


                <TouchableOpacity onPress={handlesave} style={styles.loginBtn}>

                    <Text style={styles.loginText}>SAVE</Text>

                </TouchableOpacity>

            </View>
            </ScrollView>
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
    Text: {
        height: 50,
        width: '90%',
        textAlign: "center",
        right: 0,
        padding: 10,
        marginTop: 20,
        marginBottom:50,
        alignSelf: 'flex-end',
        backgroundColor: 'black',
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
       

    },
    text:{
        color:'white',
        height: 50,
        width: '90%',
        textAlign: "center",
        right: 0,
        padding: 10,
        marginTop: 20,
        marginBottom:50,
        alignSelf: 'flex-end',
        backgroundColor: 'black',
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        fontSize:18
       
    }
    ,

    image: {

        marginBottom: 40,
        width: 200,
        height: 200

    },

    inputView: {

        backgroundColor: "#FFC0CB",

        borderRadius: 30,

        width: "90%",
        minHeightheight: 300,
       minHeight:300,
        marginBottom: 20,
        alignItems: "center",
    },

    TextInput: {
       minHeight:300,
        flex: 1,
        width:'100%',
 textAlign:'center',
      borderRadius: 30,
        padding: 10,
        backgroundColor:'black',
     color:'white',
     fontFamily:'monospace',
     fontSize:16

    },
    loginBtn: {
        width: "90%",
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
        height: 50,
        alignItems: "center",
        alignSelf:'flex-start',
        justifyContent: "center",

        marginTop: 40,

        backgroundColor: "black",
        color:'white',
        minWidth: 200,
    },
    loginText:{
        color:'white'
    }

});
