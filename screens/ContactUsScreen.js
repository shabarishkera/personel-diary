import React from 'react'
import {StyleSheet,Text,View,StatusBar,ScrollView} from 'react-native'
export default function ContactUsScreen() {
  return (
   <>
  <ScrollView style={{flex:1,gap:20}} collapsable={true}>
            <Text

                style={styles.text}

            >contact us</Text>
            <View style={styles.container}>

                

                    <Text
                           
                        style={styles.TextInput}

                        placeholderTextColor="gray"


                    >EMAIL:shabarishkera@gmai.com{'\n'} 
                    PHONE:XXXXXXXXXX</Text>

               

            </View>
            </ScrollView>
        </>
    );

}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        alignItems: "center",

        justifyContent: "center",

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
    inputView:{
            justifyContent:'center',
            alignItems:'center'


    },

   
    TextInput: {
       minHeight:300,
        flex: 1,
        width:'90%',
 textAlign:'center',
      borderRadius: 30,
        padding: 10,
        justifyContent:'center',
        backgroundColor:'black',
     color:'white',
     fontFamily:'monospace',
     fontSize:16,
     textAlignVertical:'center'
    
    },
   

});
