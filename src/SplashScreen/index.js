import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  ActivityIndicator,
  StatusBar
} from "react-native";

import Login from "../Auth/Login";
import { Theme } from "../../Theme/Theme";

 
  export default function SplashScreen() {
    return (
      <View style={styles.Container}>
       <StatusBar />
        <View style={styles.UpperContainer} />

        <View style={styles.middleContainer}>
          <Image
            source={require("./../../assets/Tanzeem.png")}
            style={styles.logoStyle}
          />
        </View>

        <View style={styles.FooterContainer} />
      </View>
    );
  }

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor:"#fff",
    // ...Platform.select({
    //   android: {
    //     marginTop: 30,
    //   },
    // }),
  },
  UpperContainer: {
    flex: 1,
    backgroundColor: Theme.colors.primaryColor,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  middleContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  FooterContainer: {
    flex: 1,
    backgroundColor: Theme.colors.black,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  logoStyle: {
    height: 250,
    width: 250,
    backgroundColor: "#fff",
  },
});
