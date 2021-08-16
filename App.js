import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import LoginForm from './src/screens/LoginForm';
import SignUp from './src/screens/SignUp';

export default function App() {
  return (
    <ScrollView>
      <LoginForm />
      {/* <SignUp /> */}
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
