
import React, {useState,useEffect} from 'react';
import { ActivityIndicator, StyleSheet,View} from 'react-native';
import { useAnimatedStyle } from 'react-native-reanimated';


import Login from "./Auth/Login";
import AuthStack from './Navigation/AuthStack';
import Signup from './Auth';
import SplashScreen from './SplashScreen'
import Firebase from '../src/FireBase/FirebaseCofigfile'
import { Theme } from '../Theme/Theme';


export default function MainActivity({navigation}) {
  const [user,setuser] = useState();
  const [intialize,setInitailize] =useState(false);
  const [active,setActive] = useState(false)

  const IsLogged =()=>{
    Firebase.auth().onAuthStateChanged( (user)=> {
        if (user) {
          navigation.replace("Home Activity")
        } else {
            // User is signed out. 
            navigation.replace("Auth Activity")
        }
    });
  }
    useEffect(() => {
        setTimeout(() => {
          IsLogged()
            setActive(true)
        }, 5 * 1000 + 200);
    }, [])


    if(!active)
    return <View style={{flex:1}}><SplashScreen /></View>
    else 
    return <View style={{flex:1}}><ActivityIndicator size="large" color={Theme.colors.primaryColor} /></View>
}
         
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




