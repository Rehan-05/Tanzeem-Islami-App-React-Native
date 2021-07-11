
import React, {useState,useEffect} from 'react';
import { StyleSheet,View} from 'react-native';
import MainActivity from './src';

import AuthStack from './src/Navigation/AuthStack';
import Signup from './src/Auth';
import SplashScreen from './src/SplashScreen'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from "@react-navigation/stack"
import TabNavigation from './src/Navigation/TabNavigation';


export default function App() {
  const Stack = createStackNavigator();
  
 return (
   <NavigationContainer>
   
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="SplashActivity"  component={MainActivity} />
        <Stack.Screen name="Auth Activity"  component={AuthStack} />
        <Stack.Screen name="Home Activity"  component={TabNavigation} />
      </Stack.Navigator>
   
   </NavigationContainer>
 )
}
         
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




