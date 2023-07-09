import {useState} from 'react'
import { StyleSheet,View,TextInput,Text,Button } from 'react-native';
export default function ResetPhraseScreen() {
  
    const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
const handlereset=async()=>
{
   //code to find usename and  password from database 
    bcrypt.hash(myPlaintextPassword, saltRounds,async function(err, hash) {
        await updateuser(hash).then(navigator.navigate("LoginScreen"));
    });
   


}
  return (
    <>
    <TextInput
        style={styles.input}
        value={username}
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
        placeholder={" New Password"}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button title={"Reset Phrase"} onPress={handlereset} />
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

