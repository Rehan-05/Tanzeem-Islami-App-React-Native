import React from 'react';

import { ScrollView, StyleSheet,StatusBar} from 'react-native';


import HomeBar from "../../../Component/HomeCom/HomeBar";
import HomeToolBar from "../../../Component/HomeCom/HomeToolBar";
import Story from "../../../Component/HomeCom/Story";
import Feeds from "../../../Component/HomeCom/Feeds";

const home = () =>{

    
    
  return(
      <>
         <StatusBar
         style={{
           backgroundColor:'#FFFF',
           barStyle:'dark-content' }}
         />
          <ScrollView style={styles.container}>

                <HomeBar/>
                <HomeToolBar/>
                <Story/>
                <Feeds/>

          </ScrollView>
      </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor:'orange'
  },
});






export default home;