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
        style={[styles.inputView, styles.loginText]}
        value={username}
        placeholder={"Email"}
        placeholderTextColor={'white'}
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
        placeholder={" New Password"}
        placeholderTextColor={'white'}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
<View style={styles.loginBtn}>
          <Button title={"reset"} color={'black'} onPress={handlereset} />
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 10,
    backgroundColor: '#fff',
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

