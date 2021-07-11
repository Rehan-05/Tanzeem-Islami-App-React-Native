import React from 'react';
import { Text,StyleSheet,View, TouchableOpacity,SectionList,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Entypo';

export const dotIcon = (<Icon1 name="dots-three-horizontal" size={25} color="black"  />);

const SECTIONS = [
  {
    title: "New Posts",
    data: [ 
      {
        key: '1',
        text: 'Rehan and 7 others post in Extreme Commerce',
        textTime:'just Now',
        photo : require("../../../assets/code2.jpg") ,
        icon : dotIcon,
    
      }  ,
       {
        key: '2',
        text: 'Rehan and 7 others post in Extreme Commerce',
        textTime:'just Now',
        photo : require("../../../assets/new.jpg") ,
        icon : dotIcon,
    
      }  ,
       {
        key: '3',
        text: 'Rehan and 7 others post in Extreme Commerce',
        textTime:'just Now',
        photo : require("../../../assets/new1.jpg") ,
        icon : dotIcon,
    
      }  ,

    ]
  },
  {
    title: "Past Posts",
     data: [ 
      {
        key: '4',
        text: 'Rehan Share post in group',
        textTime:'5 hours ago',
        photo : require("../../../assets/download.png") ,
        icon : dotIcon,
      },
       {
        key: '5',
        text: 'Rehan Share post in group',
        textTime:'5 hours ago',
        photo : require("../../../assets/green.jpg") ,
        icon : dotIcon,
      } ,
       {
        key: '6',
        text: 'Rehan Share post in group',
        textTime:'5 hours ago',
        photo : require("../../../assets/favicon.png") ,
        icon : dotIcon,
      }  ,
       {
        key: '7',
        text: 'Rehan Share post in group',
        textTime:'5 hours ago',
        photo : require("../../../assets/images.png") ,
        icon : dotIcon,
      } ,
       {
        key: '8',
        text: 'Rehan Share post in group',
        textTime:'5 hours ago',
        photo : require("../../../assets/images.png") ,
        icon : dotIcon,
      } ,
       {
        key: '9',
        text: 'Rehan Share post in group',
        textTime:'5 hours ago',
        photo : require("../../../assets/images.png") ,
        icon : dotIcon,
      } ,
       {
        key: '10',
        text: 'Rehan Share post in group',
        textTime:'5 hours ago',
        photo : require("../../../assets/images.png") ,
        icon : dotIcon,
      } , 
      {
        key: '11',
        text: 'Rehan Share post in group',
        textTime:'5 hours ago',
        photo : require("../../../assets/green.jpg") ,
        icon : dotIcon,
      } ,
      {
        key: '12',
        text: 'Rehan Share post in group',
        textTime:'5 hours ago',
        photo : require("../../../assets/green.jpg") ,
        icon : dotIcon,
      } ,

    ]
  },
 
];


const NotificationItems = ({ item }) => (
             <View style={styles.container1}>
              <TouchableOpacity onPress={() => {}}>
                <Image style={styles.image} 
                source={item.photo}/>
              </TouchableOpacity>
              <View style={styles.content}>
                <View style={styles.contentHeader}>
                  <Text  style={styles.name}>{item.text}</Text>
                </View>
                <View style={styles.contentHeader}>
                  <Text  style={styles.txtTime}>{item.textTime}</Text>
                </View>
              </View>
              <View style={styles.dot}>
               <TouchableOpacity >
                 {item.icon}
               </TouchableOpacity>
              </View>
            </View>
);

const Notification = () =>{

    return(

        < View style={styles.container}>

                    <View style={styles.UpperView}>
                        <Text style={styles.text}>
                        Notifications
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
                     <View style={styles.divider} /> 

                      <SectionList
                        sections={SECTIONS}
                        keyExtractor={(item, index) => item + index}

                       renderItem={({ item}) => {
                        return <NotificationItems item={item} />;
                      }}
                          renderSectionHeader={({ section }) => (
                          <Text style={styles.header}>{section.title}</Text>
                        )}
                      />
        </View>
              
    );
}

const styles = StyleSheet.create({



    container:{
        flex:1,
       // backgroundColor:"red",
        height:700

    },
        
    UpperView: {
    backgroundColor:'#32CD32',
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
    color:'black',
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
    divider:{
    height:5,
    width:'100%',
    backgroundColor:'#D3D3D3',
  },

  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 20,
    fontWeight:"bold",
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 20
  },

  container1:{
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexDirection: 'row',
    alignItems: 'flex-start'

  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  image:{
    width:45,
    height:45,
    borderRadius:20,
    marginLeft:20
  },
  time:{
    fontSize:11,
    color:"#808080",
  },
  name:{
    fontSize:15,
    fontWeight:"bold",
    width:255
  },
  txtTime:{
    fontSize:15,
    color:'grey'
  },
  dot:{
    alignItems:'center',
    justifyContent:'center',
    height:20,
    width:35,
    marginTop:10,
  },
  dotIcon:{
     justifyContent:'center',
     alignItems:'center'
  }

});


export default Notification;