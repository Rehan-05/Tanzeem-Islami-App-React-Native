import React,{useState} from 'react';
import {SafeAreaView,ImageBackground, Text, FlatList , StyleSheet, View, StatusBar, SectionList,Image } from 'react-native';

const dummyArray = [
  {id: '1', photo : require("../../assets/green.jpg")  },
  {id: '2', photo : require("../../assets/new1.jpg")  },
  {id: '3', photo : require("../../assets/new.jpg")  },
  {id: '4', photo : require("../../assets/code2.jpg")  },
  {id: '5', photo : require("../../assets/code.jpg")  },
 
];

const Story = () => {
  const [listItems, setListItems] = useState(dummyArray);

  const ItemView = ({item}) => {
    return (
      // FlatList Item
      <View>
       <Image 
                source={item.photo}
                style={{
                    width:120,
                    height:150,
                    borderWidth:2,
                    borderColor:'#C8C8C8',
                }} 

                />
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // FlatList Item Separator
      <View
          style={{
              height: 150,
              width: 10,
            //  backgroundColor: '#C8C8C8'
          }}
      />
    );
  };



  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <FlatList
         horizontal
          data={listItems}
          //data defined in constructor
          ItemSeparatorComponent={ItemSeparatorView}
          //Item Separator View
          renderItem={ItemView}
          keyExtractor={(index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 30,
  },
  item: {
    width:50,
    height: 44,
    
  },
});



export default Story;