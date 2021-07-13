import React from 'react'
import { View, Text,StyleSheet,SafeAreaView ,Image , useWindowDimensions, 
   Animated} from 'react-native'

export default function Discover() {
    return (
        <SafeAreaView   style={styles.container}>
            <View style={styles.ImageView}>
                
                 <Image source={require("../../../assets/DrPic.jpg")}  style={styles.photo2}/>       
            
            </View> 
            <View style={styles.TextView}>

                <Text style={styles.text1}>Dr Israr Ahmad</Text>
                <Text style={styles.text2}>Israr Ahmad was a Pakistani Islamic theologian, philosopher, and Islamic scholar who was followed particularly in South Asia as well as by South Asian Muslims in the Middle East, Western Europe, and North America.He was the founder of Tanzeem-e-Islami, an offshoot of the Jamaat-e-Islami.</Text>
          
            </View> 
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
        
          container:{
             flex: 1,
             height:500,
             width:"100%",
             backgroundColor:"green",
             
          },

          ImageView:{
              flex:1,
             height:200,
             width:200,
             margin:40,
             marginLeft:80,
             
             
          },

          photo2:{
              height:300,
              borderWidth:2,
              borderRadius:20
          },

          TextView:{
              flex:2,
              height:200,
              width:340,
              marginTop:170,
              marginLeft:30
          },

          text1:{
              fontSize:33,
              fontWeight:'bold',

          },
          text2:{
              fontSize:17,
          }

         

});
