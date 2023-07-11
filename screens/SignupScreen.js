import { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createuser } from "../backend/Database";
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
export default UserRegistration = () => {
  const navigator = useNavigation();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handlesignup = async () => {
    const user = await createuser(email, username, password);
    console.log(user);
    await AsyncStorage.setItem('isFirstEntry', 'false');
    navigator.navigate("loginScreen");
  }
  return (
    <>

      <View style={styles.container}>
      <AntDesign name="user" size={114} color="black" style={styles.image} />
        <TextInput
          style={[styles.inputView, styles.loginText]}
          value={email}
          placeholderTextColor={'white'}
          placeholder={"Email"}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize={"none"}
        />
        <TextInput
          style={[styles.inputView, styles.loginText]}
          value={username}
          placeholder={"Username"}
          placeholderTextColor={'white'}
          onChangeText={(text) => setUsername(text)}
          autoCapitalize={"none"}
        />
        <TextInput
          style={[styles.inputView, styles.loginText]}
          value={password}
          placeholder={"Secret Phrase"}
          placeholderTextColor={'white'}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <View style={styles.loginBtn}>
          <Button title={"Sign Up"} color={'black'} onPress={handlesignup} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {

    marginBottom: 0,
    alignSelf:'center',


},
  input: {
    height: 40,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  inputView: {

    backgroundColor: "black",
    minHeight:50,
    margin: 20,
    marginRight: 0,
    alignSelf: 'flex-end',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    width: "90%",

    height: 45,

    marginBottom: 20,
    alignItems: "center",
    textAlign: 'center'

  },

  TextInput: {

    height: 50,

    flex: 1,
    width: 200,
    textAlign: "center",

    padding: 10,

    marginLeft: 20,
    color: "white"

  },

  forgot_button: {

    height: 30,

    marginBottom: 30,

  },

  loginBtn: {

    width: "90%",


    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,

    height: 50,

    alignItems: "center",

    justifyContent: "center",

    marginTop: 40,
    color: "white",
    backgroundColor: "black",
    minWidth: 200,

  },
  loginText: {
    color: 'white',
    fontFamily:'monospace',
    fontSize:19
  }
});