import React from 'react';
import {StyleSheet,Text, Image, View, TouchableOpacity} from "react-native";

import {
	Entypo,
	AntDesign,
	MaterialCommunityIcons
} from '@expo/vector-icons'

import ProCom from './ProCom';

const Feeds = () =>{

    return(
       
        <>
            <View style={styles.container}>
                   
                   <View style={styles.header}>
                       
                       <View style={styles.row}>
                           
                           <ProCom  source={require("../../assets/images.png")} />
                               
                               <View>

                                    <Text style={styles.user}>
                                        Rehan Asghar
                                    </Text>

                                        <View style={styles.row}>

                                                <Text style={styles.time}>
                                                    5 hour ago
                                                </Text>
                                                <Entypo
                                                    name='dot-single'
                                                    size={12}
                                                    color='black'
                                                    style={{marginTop:4}}
                                                />
                                                <Entypo
                                                    name='globe'
                                                    size={10}
                                                    color='black' 
                                                     style={{marginTop:4}}

                                                />

                                        </View>

                                 </View>          
                        </View>

                                    <Entypo
                                        name='dots-three-horizontal'
                                        size={25}
                                        color='#222121'
                                        style={{marginRight:20, }}
                                    />

                   </View>
            

            
                   <Text style={styles.postText}>

                    React Native is an open-source mobile application framework created by Facebook, Inc. 

                   </Text>

                    <Image source={require('../../assets/react.png')} style={styles.image} />
                     

                     <View style={styles.Separator} />

                             <View style={styles.footerMenu}>

                                 <TouchableOpacity style={styles.button}>

                                                 <View style={styles.icon}>
                                                      
                                                      <AntDesign
                                                        name='like1'
                                                        size={20}
                                                        color='#424040'
                                                       />
                                                       
        
                                                 </View>

                                                 <Text style={styles.like}> Like </Text>

                                 </TouchableOpacity>    

                                  <TouchableOpacity style={styles.button}>

                                                 <View style={styles.icon}>
                                                      
                                                                        
                                                    <MaterialCommunityIcons
                                                        name='comment-outline'
                                                        size={20}
                                                        color='#424040'
                                                    />
                                                       
        
                                                 </View>

                                                 <Text style={styles.like}> Comment </Text>
                                                 
                                 </TouchableOpacity>  

                                  <TouchableOpacity style={styles.button}>

                                                 <View style={styles.icon}>
                                                      
                                                    <MaterialCommunityIcons
                                                        name='share-outline'
                                                        size={20}
                                                        color='#424040'
                                                    />
                                                       
        
                                                 </View>

                                                 <Text style={styles.like}> Share </Text>
                                                 
                                 </TouchableOpacity> 
                                
                             </View>
             </View>

               <View style={styles.Separator1} />

                <View style={styles.container}>
                   
                   <View style={styles.header}>
                       
                       <View style={styles.row}>
                           
                           <ProCom  source={require("../../assets/images.png")} />
                               
                               <View>

                                    <Text style={styles.user}>
                                        Rehan Asghar
                                    </Text>

                                        <View style={styles.row}>

                                                <Text style={styles.time}>
                                                    5 hour ago
                                                </Text>
                                                <Entypo
                                                    name='dot-single'
                                                    size={12}
                                                    color='black'
                                                    style={{marginTop:4}}
                                                />
                                                <Entypo
                                                    name='globe'
                                                    size={10}
                                                    color='black' 
                                                     style={{marginTop:4}}

                                                />

                                        </View>

                                 </View>          
                        </View>

                                    <Entypo
                                        name='dots-three-horizontal'
                                        size={25}
                                        color='#222121'
                                        style={{marginRight:20, }}
                                    />

                   </View>
            

            
                   <Text style={styles.postText}>

                    React Native is an open-source mobile application framework created by Facebook, Inc. 

                   </Text>

                    <Image source={require('../../assets/react.png')} style={styles.image} />
                     

                     <View style={styles.Separator} />

                             <View style={styles.footerMenu}>

                                 <TouchableOpacity style={styles.button}>

                                                 <View style={styles.icon}>
                                                      
                                                      <AntDesign
                                                        name='like1'
                                                        size={20}
                                                        color='#424040'
                                                       />
                                                       
        
                                                 </View>

                                                 <Text style={styles.like}> Like </Text>

                                 </TouchableOpacity>    

                                  <TouchableOpacity style={styles.button}>

                                                 <View style={styles.icon}>
                                                      
                                                                        
                                                    <MaterialCommunityIcons
                                                        name='comment-outline'
                                                        size={20}
                                                        color='#424040'
                                                    />
                                                       
        
                                                 </View>

                                                 <Text style={styles.like}> Comment </Text>
                                                 
                                 </TouchableOpacity>  

                                  <TouchableOpacity style={styles.button}>

                                                 <View style={styles.icon}>
                                                      
                                                    <MaterialCommunityIcons
                                                        name='share-outline'
                                                        size={20}
                                                        color='#424040'
                                                    />
                                                       
        
                                                 </View>

                                                 <Text style={styles.like}> Share </Text>
                                                 
                                 </TouchableOpacity> 
                                
                             </View>
             </View>

        </>


    );
}

const styles = StyleSheet.create({
       
        container:{
             
            flex:1,
        },

        header:{

            height: 60,
            flexDirection: "row",
            alignItems:'center',
            justifyContent: "space-between",
            marginTop:3,
            
        },

        row:{

             flexDirection:'row',
             alignItems:'center',  
                
        },

        user:{

            fontSize: 15,
            fontWeight: 'bold',
            color: "black",
            paddingLeft:18
        
         },

         time:{
             fontSize:12,
             color:"black",
             marginLeft:23,
             marginTop:4
         },

         postText:{
          fontSize: 12,
	      color:"black",
	      lineHeight: 16,
          paddingRight:10,
         },

         image:{

            marginTop: 9,
            width: "100%",
            height: 200
         },

            Separator:{
            width: "100%",
            height: 5,
            backgroundColor: "#dcdcdc",
        },

         footerMenu:{
             
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 9,

         },

         button:{
           
            flexDirection: "row",

         },

         icon:{
            
            marginRight:6
         },

         like:{

          fontSize: 15,
	      color: "#424040",
          fontWeight:'bold'

         },

        Separator1:{
            width: "100%",
            height: 10,
            backgroundColor: "#dcdcdc",
        },
          


});


export default Feeds;