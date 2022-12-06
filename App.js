import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { db } from './Components/FirebaseConfig';
import database from '@react-native-firebase/database';
import { Component, useEffect, useState } from 'react';
import {
  ref,
  onValue,
 
} from 'firebase/database';
import Layout from "./Components/Layout"
import Temperature from './Components/Temperature';


const App = () => {



  return (
  <View>
<Layout/>
{/* <Temperature/> */}

  </View> 
  
  );
}
 
export default App;