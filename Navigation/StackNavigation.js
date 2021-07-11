import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../src/Login/Login";
import Signup from "../src/Signup/Signup";
import home from "../src/Home/home";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SplashScreen" component={SplashScreen} 
          options={{
                 headerShown:false,
          }}   
      />
      
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="home"   component={home} />
    </Stack.Navigator>
  );
}

export default { MainStackNavigator };