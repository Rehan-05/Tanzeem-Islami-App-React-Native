
import React from 'react';
import { StyleSheet,View,Text,Image,Button,TouchableOpacity,SafeAreaView, TextInput} from 'react-native';

import Icon from '@expo/vector-icons/Entypo';
import Icon1 from '@expo/vector-icons/FontAwesome5';
import Icon2 from '@expo/vector-icons/Fontisto';
import Icon3 from '@expo/vector-icons/MaterialIcons';



const SharePost = () =>{
    return(
              <SafeAreaView style={styles.container}>

                    <View style={styles.TopSection}>
                     <Icon name="cross" size={40} color="black"  />
                    </View>

                    <View style={styles.Separator} /> 

                                    <View style={styles.UpperText}>
                                            <Text style={styles.text1}> Hi,</Text>
                                            <Text  style={styles.text2}> What's on your mind?</Text>
                                    </View>
                                    <View style={styles.Input}>
                                        <TextInput  placeholder=" Write Something..." style={styles.InputField} />
                                    </View>

                    <View style={styles.choose}>
                            <View >      
                                <Text style={styles.text5}>
                                    Choose Photos
                                </Text>
                            </View>
                             <View >      
                                <Text style={styles.text6}>
                                    See All
                                </Text>
                            </View>
                     </View>

                                    <View style={styles.photoSection}>
                                            <View style={styles.photoView}>
                                                    <Image source={require("../../../assets/new1.jpg")}  style={styles.photo}/>
                                            </View>

                                            <View style={styles.Separator} /> 

                                             <View style={styles.photoView1}>
                                                    <Image source={require("../../../assets/green.jpg")}  style={styles.photo1}/>
                                            </View>
                                            <View style={styles.Separator} /> 

                                             <View style={styles.photoView2}>
                                                    <Image source={require("../../../assets/code2.jpg")}  style={styles.photo2}/>
                                            </View>
                                    </View>
                                    
                 <View style={styles.footer}>

                    <View style={styles.buttonRow}>

                            <View style={styles.button1} >
                                <View>
                                   <TouchableOpacity style={styles.button11}>
                                      <Icon1 name="photo-video" size={30} color="green" />
                                   </TouchableOpacity>
                                 </View>

                                <View>
                                     <Text style={{fontSize:15, fontWeight:'bold' ,paddingLeft:15}}>Photo/Video</Text>
                                </View>
                              
                            </View>
                             <View style={styles.button1} >
                                <View>
                                   <TouchableOpacity style={styles.button11}>
                                      <Icon name="camera" size={30} color="deepskyblue" />
                                   </TouchableOpacity>
                                 </View>

                                <View>
                                     <Text style={{fontSize:15, fontWeight:'bold' ,paddingLeft:15}}>Camera</Text>
                                </View>
                              
                            </View>
                            
  
                    </View>

                    
                    <View style={styles.buttonRow}>

                            <View style={styles.button1} >
                                <View>
                                   <TouchableOpacity style={styles.button11}>
                                      <Icon2 name="smiley" size={30} color="orangered" />
                                   </TouchableOpacity>
                                 </View>

                                <View>
                                     <Text style={{fontSize:15, fontWeight:'bold' ,paddingLeft:15}}>Feeling/Activity</Text>
                                </View>
                              
                            </View>
                             <View style={styles.button1} >
                                <View>
                                   <TouchableOpacity style={styles.button11}>
                                      <Icon3 name="place" size={30} color="deeppink" />
                                   </TouchableOpacity>
                                 </View>

                                <View>
                                     <Text style={{fontSize:15, fontWeight:'bold' ,paddingLeft:15}}>Check In</Text>
                                </View>
                              
                            </View>
                            
  
                    </View>


                 </View>





              </SafeAreaView>
        



    );
}

const styles = StyleSheet.create({

    container:{
       flex:1,
    },

    TopSection:{
       height: 50,
       width:"100%",
       marginTop:10,
       //marginLeft:10,
       backgroundColor:'#00D100'
    },


    Separator:{
        height:1,
        backgroundColor:'gray',
    },

    UpperText:{
        height:100,
        width:'100%',
        padding:20
    },

    text1:{

        fontSize:30,

    },
    
     text2:{
        fontSize:30,
        fontWeight:'bold',
    },

     Input:{
        height:100,
        width:'100%',
    },

     InputField:{

        // backgroundColor:'green',
        height:80,
        width:'95%',
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        borderWidth:1,
        borderColor:'gray',
        borderRadius:10,
        padding:15,
        fontSize:23,
        color:'gray'
        
     },

     choose:{
         height:35,
         width:'100%',
         flexDirection:'row',
         marginTop:5,
         justifyContent:'space-between',
        // backgroundColor:'red'
     },

     text5:{
         fontSize:20,
         fontWeight:'bold',
         paddingLeft:15
     },

     text6:{
         fontSize:20,
         fontWeight:'bold',
         paddingRight:15,
         color:'#1E90FF',
     },
     
     photoSection:{
         height:120,
         width:"100%",
        // backgroundColor:'green',
         flexDirection:"row"
     } ,

     Separator:{
        height:1,
        backgroundColor:'gray',
        },

     photo:{
          height:110,
          width:115,
          marginLeft:7,
      },

     photo1:{
          height:110,
          width:115,
          marginLeft:7
      },

     photo2:{
          height:110,
          width:115,
          marginLeft:7,
      },

     footer:{
         // backgroundColor:'red',
          height:"100%",
          width:"100%",
          marginTop:20,

      },

     buttonRow:{
          
            flexDirection:'row',
            justifyContent:'space-around'
      },

     button1:{
            backgroundColor:"navajowhite",
            flexDirection:'row',
            justifyContent:"center",
            alignItems:'center',
            margin:15,
            height:60,
            width:170,
            borderRadius:10
      }


});


export default SharePost;