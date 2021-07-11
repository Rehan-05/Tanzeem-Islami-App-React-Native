import React from 'react';

import { View, Text,StatusBar, Button,LogBox } from 'react-native';
import { loggingOut } from '../FireBase/AuthProvider';

import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Feeds from '../Tabs/feeds/Feeds';
import Discover from '../Tabs/Discover/Discover';
import Notification from '../Tabs/Notifcation/Notification';
import Settings from '../Tabs/Setting/Settings';
import Donate from '../Tabs/Donate/Donate';

import Ionicons from 'react-native-vector-icons/Ionicons';




const Tab=createBottomTabNavigator() ;


 export default function TAB(){
    return ( 
           
        <Tab.Navigator   screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Feeds') {

              iconName = focused? 'home': 'home-outline';

            } else if (route.name === 'Donate') {
              iconName = focused ? 'rose' : 'thumbs-up';
            }else if (route.name === 'Discover'){
                iconName = focused ? 'person-circle-sharp' : 'person-circle-outline';
            }else if (route.name === 'Notification'){
                iconName = focused ? 'notifications' : 'notifications-circle-outline';
            }else if (route.name === 'Settings'){
                iconName = focused ? 'settings' : 'settings-outline'
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />
                   
          },
        })}
        tabBarOptions={{
          activeTintColor: 'green',
          inactiveTintColor: 'black',
        }}>

            <Tab.Screen name="Feeds" component={Feeds}  />

            <Tab.Screen name="Donate" component={Donate}  />

            <Tab.Screen name="Discover" component={Discover}  />

            <Tab.Screen name="Notification" component={Notification}  />
            
            <Tab.Screen name="Settings" component={Settings}  />

        </Tab.Navigator>

      
    );
  
}

//export default Tab;
