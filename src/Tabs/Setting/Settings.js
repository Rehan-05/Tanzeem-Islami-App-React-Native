import React from 'react'
import { StyleSheet, 
    View, 
    Text,
    Image,
    Button,
    TouchableOpacity,
    Dimensions,
    SafeAreaView,} 
from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';


const Settings = () =>{

    return (
               
                <SafeAreaView style={styles.container}>

                <View style={styles.Top}>
               

                    <View style={styles.content}>
                       

                        <Image style={styles.profileImg}  source={require('../../../assets/green.jpg')} />     
                   
        

                     </View>

                     <TouchableOpacity style={styles.pencil}>

                         <Icon name="pencil-alt" size={25} color="black" style={styles.icon1} />

                     </TouchableOpacity>

                </View>

                <View style={styles.middle}>

                    <View style={styles.middle1}>
                            <View style={styles.nameView}> 
                                <Text style={styles.NameText}> Rehan Asghar</Text>
                            </View>

                            <View style={styles.pencilText}>
                                <TouchableOpacity>
                                    <Icon name="pencil-alt" size={25} color="black" style={styles.icon1} />
                                </TouchableOpacity>
                            </View>
                     </View>

                       <View style={styles.middle2}>
                            <View style={styles.nameView}> 
                                <Text style={styles.NameText}> Location</Text>
                            </View>

                             <View style={styles.pencilText}>
                                <TouchableOpacity>
                                    <Icon name="pencil-alt" size={25} color="black" style={styles.icon1} />
                                </TouchableOpacity>
                             </View>
                     </View>

                      <View style={styles.middle2}>
                            <View style={styles.nameView}> 
                                <Text style={styles.NameText}> Notification </Text>
                            </View>

                            <View style={styles.pencilText}>
                                <TouchableOpacity>
                                    <Icon name="pencil-alt" size={25} color="black" style={styles.icon1} />
                                </TouchableOpacity>
                            </View>
                     </View>
                     
                </View>

                 <View style={styles.lastCon}>
                           
                       <TouchableOpacity style={styles.logoOutView}>
                         <View>
                             <Text style={styles.log}>
                           Logout
                            </Text>
                         </View>
                         
                         <View>
                               <Icon1 name="logout" size={30} color="white" style={styles.icon1} />
                         </View>
                    

                       </TouchableOpacity>
                            
                 </View>

              

                </SafeAreaView>
                
                
         
    );
}


const styles = StyleSheet.create({

    container:{
       
        flex: 1,
         height:'100%',
         width:'100%',
        

    },

     Top:{
         flex:1,
         // backgroundColor:'red',
         height:215,
         width:"100%",
     },


    content:{

         marginTop:10,
         justifyContent:"center",
         alignItems:"center",
         backgroundColor:'#32CD32',
         height:50,
         width:"100%",

    },

    middle:{
        
         flex:2,
         height:250,
         width:'100%',
         marginTop:100
         // backgroundColor:'orange',

    },

    middle1:{
         flexDirection:'row',
         marginTop:10,

    },

    middle2:{
         flexDirection:'row',
         marginTop:25

    },

    nameView:{
        
         marginLeft:"17%",
         marginTop:25,
         position:'relative',
            
    },

     pencilText:{
        
         backgroundColor:"#32CD32",
         height:50,
         width:50,
         marginLeft:290,
         top:10,
         borderRadius:100/2,
         position:'absolute',   

     },

    NameText:{
          
         fontSize:20,
         color:'black',
         fontWeight:'bold',

    },


   
    profileImg:{
         
         width:130,
         height:130,
         borderRadius:130/2,
         marginTop:200,
    },

    pencil:{
         backgroundColor:"#32CD32",
         height:50,
         width:50,
         left:50,
         top:100,
         borderRadius:100/2,
         marginLeft:150   
     },

    

     icon1:{
         top:12,
         marginLeft:14

     },

     
    lastCon:{
    //  backgroundColor:'yellow',
     flex:2,
     marginTop:20,
     height:70,
     justifyContent:'center',
     alignItems:'center',   
     },

     logoOutView:{
         flexDirection:'row',
         backgroundColor:'red',
         height:50,
         width:130,
     },

     log:{
         padding:7,
         fontSize:23,
         marginTop:5,
         fontWeight:'bold',
         color:'white'
     }
      




});

export default Settings;