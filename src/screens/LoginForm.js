import React, { useState } from 'react'
import { ScrollView, StyleSheet,Text, TextInput, TouchableOpacity } from 'react-native'


export default function LoginForm() {
  const [state, setstate] = useState({
    username: '',
    password: '',
  });

  function handleOnChange(name, text){
    setstate({...state,[name]: text});
  };

  function handleSubmit(){
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Log In</Text>

      <TextInput
        placeholder = 'Username' style={styles.input} onChangeText={(text) => {handleOnChange("username", text);}}
      />

      <TextInput
        placeholder = 'Password' style={styles.input}
        secureTextEntry={true}
        autoCorrect={false}
        onChangeText={(text) => {
          handleOnChange("password", text);
        }}
      />
      <TouchableOpacity>
      <Text style={styles.input1}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.input2}>Don't have account?
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.button3}>Sign Up</Text>
        </TouchableOpacity>
      </Text>
      
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginHorizontal:50,
  },
  text: {
    fontSize: 50,
    color: '#711be4',
  },
  input: {
    marginTop: 60,
    fontSize: 23,
    borderBottomWidth: 3,
    borderBottomColor: '#711be4',
    color:'#05010A',
    paddingBottom: 10,
  },
  input1: {
    paddingTop:10,
    alignSelf:'flex-end',
    color: '#7EC8E3',
  },
  button: {
    width:275,
    height: 55,
    backgroundColor: '#711be4',
    borderRadius: 18,
    marginTop: 70,
    alignItems: 'center',
    justifyContent: 'center',
},

  buttonText: {
    color: "white",
    fontSize: 18,
    textTransform: "uppercase",
  },

  input2: {
    marginTop: 50,
    alignSelf: 'center',
    fontSize: 18,
  },
  button3: {
    marginLeft: 10,
    marginTop: 2,
    color: '#711be4',
    
  },

});