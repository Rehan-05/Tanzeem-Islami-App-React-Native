import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from '../Auth';
import Login from '../Auth/Login';

export default function AuthStack() {
    const Stack = createStackNavigator()
    return (
       
           <Stack.Navigator screenOptions={{headerShown:false}}>
               <Stack.Screen name="SignIn" component={Login} />
               <Stack.Screen name="Sign Up" component={Signup} />
           </Stack.Navigator>
       
    )
}
