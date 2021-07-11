import * as React from 'react';
//import MapView from 'react-native-maps';
import {
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    Montserrat: require('../../../assets/fonts/Montserrat-ExtraBold.ttf'),
  });
  if (!loaded) {
    return null;
  }

  const onPress = () => alert('Thanks For Donation');

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: '#0000',
            marginBottom: 10,
            marginTop: 70,
            borderBottomLeftRadius: 40,
          }}>
          <View
            style={{
              //height: 50,
              backgroundColor: '#fff',
              borderBottomLeftRadius: 40,
              marginBottom: -40,
              zIndex: 1,
            }}>
            <Text
              style={{ fontSize: 25, margin: 15, fontFamily: 'Montserrat' }}>
              Donation For Tanzeem
            </Text>
          </View>
          {/* <MapView style={styles.map} /> */}
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'black',
          flex: 1,
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
          marginTop: -40,
        }}>
        <Text
          style={{
            fontFamily: 'Montserrat',
            color: '#ffff',
            fontSize: 18,
            margin: 10,
            marginTop: 50,
          }}>
          Donation Goals
        </Text>

         <View
          style={{
            margin: 10,
          width:'95%',
            marginTop:0,
            flexDirection: 'row',
            alignItems: 'center',
          //  alignContent: 'center',
            justifyContent: 'space-between',
          }}>

        <Image
          style={{ height: 45 ,width:250}}
          source={require('../../../assets/b6.png')}
        />
 <Text
            style={{
               alignSelf:'center',
              fontFamily: 'Montserrat',
              color: '#ffff',
              marginTop:10,
              
              fontSize: 18,
            
            }}>
            12 / 30 Days
          </Text>
</View>
        <Text
          style={{
            fontFamily: 'Montserrat',
            color: '#ffff',
            fontSize: 18,
            margin: 10,
          }}>
          Participants
        </Text>

        <View
          style={{
            margin: 10,
            flexDirection: 'row',
            alignItems: 'center',
          //  alignContent: 'center',
            justifyContent: 'space-between',
          }}>
          <Image
            style={{ height: 30, width: 30 }}
            source={require('../../../assets/part.png')}
          />

          <TouchableOpacity
            style={{ backgroundColor: 'green', width: 100, borderRadius: 20 }}
            onPress={onPress}>
            <Text
              style={{
                fontFamily: 'Montserrat',
                color: '#ffff',
                fontSize: 18,
                margin: 10,
                alignSelf:'center'

              }}>
              See All
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{ backgroundColor: 'green', width: '70%',padding:8, alignSelf:'center',   margin: 20 }}
          onPress={onPress}>
          <Text
            style={{
               alignSelf:'center',
              fontFamily: 'Montserrat',
              color: '#ffff',
              fontSize: 18,
              margin: 10,
               
            }}>
            Donate Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: 500,
    // marginTop:-10
    //flex: 1,
    // height: Dimensions.get('window').height,
  },
});
