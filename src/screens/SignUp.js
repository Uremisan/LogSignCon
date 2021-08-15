import React from 'react'
import { ScrollView, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export default function SignUp() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Sign Up</Text>

      <TextInput placeholder = 'Username' style={styles.input}/>

      <TextInput placeholder = 'Email' style={styles.input0}/>

      <TextInput
        placeholder = 'Password' style={styles.input0}
        secureTextEntry={true}
        autoCorrect={false}
      />

      <TextInput
        placeholder = 'Password again' style={styles.input}
        secureTextEntry={true}
        autoCorrect={false}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.input2}>You already have account?<TouchableOpacity style={styles.button2}>
          <Text style={styles.button3}>Log in</Text>
        </TouchableOpacity>
      </Text>

    </ScrollView>
  )
}


const styles = StyleSheet.create ({
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
    fontSize: 21,
    borderBottomWidth: 3,
    borderBottomColor: '#711be4',
    color:'#05010A',
    paddingBottom: 10,
  },
  input0: {
    marginTop: 45,
    fontSize: 21,
    borderBottomWidth: 3,
    borderBottomColor: '#711be4',
    color:'#05010A',
    paddingBottom: 10,
  },
  button: {
    width:275,
    height: 55,
    backgroundColor: '#711be4',
    borderRadius: 12,
    marginTop: 70,
    alignItems: 'center',
    justifyContent: 'center',
},

  buttonText: {
    color: "white",
    fontSize: 22,
    textTransform: "none",
    fontFamily:'Helvetica',
  },

  input2: {
    marginTop: 38,
    alignSelf: 'center',
    fontSize: 18,
  },
  button3: {
    marginLeft: 10,
    marginTop: 25,
    color: '#711be4',
    fontSize: 18,
  },


}) 