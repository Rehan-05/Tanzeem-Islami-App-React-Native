import React from 'react';
import { StyleSheet, View, TextInput, Text} from 'react-native';


import {
	Ionicons,
	MaterialIcons,
	MaterialCommunityIcons
} from '@expo/vector-icons'


import ProCom from './ProCom';

const HomeToolBar = () =>{
     
    return(
      <>
           <View style={styles.container}>
               <View style={styles.CoContainer}>
                    <ProCom source={require('../../assets/images.png')} />
                      <View style={styles.inputView}>
                           <TextInput placeholder="What's on your mind?"  style={styles.input}/>
                      </View>
               </View>

                <View style={styles.divider} /> 

                 <View  style={styles.CoContainer1}>

                         <View style={styles.menu}>
                               <Ionicons name='ios-videocam' size={22} color='#F44337' />
                              <Text style={styles.text}>Live</Text>

                         </View>

                            <View style={styles.Separator} /> 

                            <View style={styles.menu}>
                                         <MaterialIcons
						                             	name='photo-size-select-actual'
						                            	size={20}
						                             	color='#4CAF50'
					                                 	/>
                              <Text style={styles.text}>Photos</Text>
                             

                         </View>

                           <View style={styles.Separator} /> 

                          <View style={styles.menu}>
                                   <MaterialCommunityIcons
                                      name='video-plus'
                                      size={22}
                                      color='#E141FC'
                                    />
                              <Text style={styles.text}>Check-In</Text>
                         </View> 
                 </View>       
           </View>
           <View style={styles.bottom} />
       </>
    );
}

const styles = StyleSheet.create({
  container: {
   /// backgroundColor:'red',
    height:92,
    width:'100%'
  },
  CoContainer:{
      flexDirection:'row',
      backgroundColor:'#FFFFFF',
      width:"100%",
      alignItems:'center'

  },
   input:{
       height: 30,
	     width: '80%',
       paddingLeft:10 ,
       borderWidth:1,
       borderColor:'#A9A9A9',
       borderRadius:20
   },

  inputView:{
       flexDirection:'row',
       width:'100%',
       paddingLeft:25,
  },

  divider:{
    height:2,
    width:'100%',
    backgroundColor:'#D3D3D3',
  },

  CoContainer1:{
    flexDirection: 'row',
	  width: '100%',
    height:'50%',
	  paddingLeft:11,
	  alignItems: 'center',

  },
  menu:{
    flex: 1,
	  flexDirection: "row",
	  alignItems: "center",
	  justifyContent: "center",
   	height: 42
  },
  text:{
    paddingLeft: 11,
	  fontWeight:"bold",
    fontSize:12
  },

  Separator:{
      width: 1,
    	height: 42,
     	backgroundColor: "#f0f2f5",
  },

  bottom:{

     width: "100%",
	   height: 9,
	   backgroundColor: "#f0f2f5",

  }

   
});


export default HomeToolBar; 