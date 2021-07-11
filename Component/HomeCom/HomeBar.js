import React from 'react';


import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const HomeBar = () =>{
     
    return(
           <View style={styles.container}>

             <Text style={styles.text}>
              Tanzeem
             </Text>

             <View style={styles.row}>

                     <TouchableOpacity style={styles.button1}>
                       <Icon name="search" size={25} color="black" style={styles.icon1} />
                     </TouchableOpacity>
                     
                       <TouchableOpacity style={styles.button2}>
                       <Icon name="bell" size={25} color="black" style={styles.icon2} />
                     </TouchableOpacity>

             </View>   
           </View>
    );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor:'red',
    height:58,
    marginTop:20,
    paddingRight:5,
    paddingLeft:5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:'100%'
  },
  text:{
    color:'#32CD32',
    fontSize:30,
    paddingTop:10,
    fontWeight: 'bold',
    letterSpacing:0.5
  },
   row:{
    flexDirection:'row',
   },
   button1:{
    width:42,
    height:42,
    borderRadius:21,
    backgroundColor:'#eeeeee',
    alignItems:'center',
    justifyContent:'center',
    marginLeft:16,
    marginRight:11

   },

    button2:{
    width:42,
    height:42,
    borderRadius:21,
    backgroundColor:'#eeeeee',
    alignItems:'center',
    justifyContent:'center',
    marginRight:11

   },
   icon1:{
     marginLeft:2
   },
   icon2:{
     marginLeft:2
   },
   
});


export default HomeBar; 