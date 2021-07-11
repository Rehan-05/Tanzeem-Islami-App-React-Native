import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const ProCom = ({ source, Story }) => {
      
    return(
        <View style={style.container}>
              <Image style={ style.CoContainer}
               source={source}
               Story={Story} />
        </View>
    );

}

const style = StyleSheet.create({
   container:{
        width:40,
        height:40,
        paddingLeft:12,
        position:'relative'
   },
   CoContainer:{
         width:40,
        height:40,
        borderRadius:20,
        borderColor: "#1777f2",
   }

});


export default ProCom;