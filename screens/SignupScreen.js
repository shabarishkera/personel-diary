import { useState } from "react";
import { Alert, Button, StyleSheet, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createuser } from "../backend/Database";
import { useNavigation } from '@react-navigation/native';
export default UserRegistration = () => {
  const navigator=useNavigation();
    const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
const handlesignup=async()=>
{
       const user= await createuser(email,username,password);
       console.log(user);
         await  AsyncStorage.setItem('isFirstEntry','false');
       navigator.navigate("loginScreen");
}
  return (
    <>
    <TextInput
        style={styles.input}
        value={email}
        placeholder={"Email"}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize={"none"}
      />
      <TextInput
        style={styles.input}
        value={username}
        placeholder={"Username"}
        onChangeText={(text) => setUsername(text)}
        autoCapitalize={"none"}
      />
      <TextInput
        style={styles.input}
        value={password}
        placeholder={"Secret Phrase"}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button title={"Sign Up"} onPress={handlesignup} />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
});