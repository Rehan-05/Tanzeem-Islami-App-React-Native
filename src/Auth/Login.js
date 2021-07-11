import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TextInput, ScrollView, ActivityIndicator } from "react-native";
import { TouchableOpacity, Button, Dimensions,KeyboardAvoidingView ,StatusBar} from "react-native";

import { Theme } from "../../Theme/Theme";

import Input from "../../Component/Input";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

import * as Fonts from "expo-font";
import { useFonts } from "expo-font";
import { signIn } from "../FireBase/AuthProvider";
import * as Google from 'expo-google-app-auth';
import Firebase,{storage} from '../FireBase/FirebaseCofigfile'
import { doc, setDoc } from "firebase/firestore"; 

import * as firebase from 'firebase';




export default function Login({navigation}) {
  const [email, setEmail] = useState("ua1265513@gmail.com");
  const [password, setPassword] = useState("12345678");
  const [EmailValid, setEmailValid] = useState(false);
  const [PasswordValid, setPasswordValid] = useState(false);
  const [secureTextEntry, setsScureTextEntry] = useState(true);



  const ValidationFunc = (type) => {
    let emailreg =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let passwordreg = /(?=.{8,})/;

    switch (type) {
      case "email":
        if (emailreg.test(email) && email.length >= 5) {
          setEmailValid(true);
        } else {
          console.log(emailreg.test(email));
          setEmailValid(false);
        }
        break;
      case "Password":
        if (passwordreg.test(password) && password.length >= 8) {
          setPasswordValid(true);
        } else {
          setPasswordValid(false);
        }
        break;

      default:
        break;
    }
  };




  const isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId === Firebase.auth.GoogleAuthProvider.PROVIDER_ID && providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;}}}return false; };
  const onSignIn = googleUser => {
    const db = firebase.firestore();
    // console.log('Google Auth Response', googleUser);
  
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = Firebase.auth().onAuthStateChanged(
      function(firebaseUser) {
        unsubscribe();
        // Check if we are already signed-in Firebase with the correct user.
        if (!isUserEqual(googleUser, firebaseUser)) {
          // Build Firebase credential with the Google ID token.
          var credential = Firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken,
            googleUser.accessToken
          );
          // Sign in with credential from the Google user.
        

          Firebase
            .auth()
            .signInWithCredential(credential)
            .then(async(result)=> {
              console.log("reached")
              console.log('user signed in ');
              if (result.additionalUserInfo.isNewUser) {
                console.log(result.user.uid)

                  let UserInfo = {
                    gmail: result.user.email,
                    profile_picture: result.additionalUserInfo.profile.picture,
                    first_name: result.additionalUserInfo.profile.given_name,
                    last_name: result.additionalUserInfo.profile.family_name,
                    created_at: Date.now()
                  }
                  db.collection('users')
                  .doc(result.user.uid)
                  .set(UserInfo);
                 
                
                // db.collection("users")
                //     .doc(result.user.uid)
                //     .add()
                //     .catch(function (error) {
                //       console.log(error)
                //     })
                
              } else {
                
                  db.collection("users")
                  .doc( result.user.uid)
                  .update({
                    last_logged_in: Date.now()
                  });
              }
            })
            .catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
              // console.log(error)
            });
        } else {
          console.log('User already signed-in Firebase.');
        }
      }
    );
  };

  const  signInWithGoogleAsync=async()=> {
    try {
      const result = await Google.logInAsync({
        androidClientId: "799318648334-vcmuccckvn3862rdc4lfmcj027pad2ts.apps.googleusercontent.com",
        iosClientId: "799318648334-8fvco97cik2l17k8ls0l9ktu8pao6cvf.apps.googleusercontent.com",
        scopes: ['profile', 'email'],
        // iosStandaloneAppClientId:'AIzaSyCSN6bAQedCwyV0P-4DRSOoYqdq8SV_O9A',
        // androidStandaloneAppClientId:'AIzaSyDjERaU7k2en0xycg7fmEaEkmzxQ97hVqQ',
      
      });
  
      if (result.type === 'success') {
        // signInWithGoogleAsync(result)
        onSignIn(result)

        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log(e)
    }
  }

  const [loaded] = useFonts({
    Pattaya: require("../../assets/fonts/Pattaya-Regular.ttf"),
    IndieFlower: require("../../assets/fonts/IndieFlower-Regular.ttf"),
    FingerPaint: require("../../assets/fonts/Pattaya-Regular.ttf"),
    urduFonts: require("../../assets/fonts/AASameerKhashab-BoldBold.ttf"),
  });
 if(!loaded)
 {
   return (<View style={{justifyContent:'center',alignItems:'center',flex:1}}>
    <StatusBar style="auto"/>
     <ActivityIndicator size="large" color="#00ff00" />
</View>)
 }
  return (
    <KeyboardAvoidingView
      style={styles.Container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={false}
      // keyboardVerticalOffset={100}
    >
     <StatusBar style="auto"/>
      <View style={styles.UpperContainer}>
        <View style={styles.HeadingView}>
          <Text style={{ fontFamily:"FingerPaint",...styles.firstHeading}}>Sign in to your Account</Text>
          <View style={styles.logoView}>
            <Image
              source={require("./../../assets/Tanzeem.png")}
              style={styles.logoStyle}
            />
          </View>
        </View>
      </View>

      <View style={styles.middleContainer}>
        <Text
          style={{ fontFamily: "urduFonts", fontSize: 30, textAlign: "center" }}
        >
          ‎تنظیم اسلامی
        </Text>

        <Input
          firstIconName="mail-outline"
          placeholder="Enter your Email"
          margintop={60}
          maxLength={30}
          value={email}
          onChange={(text) => setEmail(text)}
          onEndEditing={() => ValidationFunc("email")}
          ndIcon={EmailValid ? "checkmark" : null}
        />

        <Input
          firstIconName="lock-closed-outline"
          placeholder="Password"
          maxLength={30}
          margintop={30}
          value={password}
          secureTextEntry={secureTextEntry}
          onChange={(text) => setPassword(text)}
          ndIcon={secureTextEntry ? "eye-outline" : "eye-off-outline"}
          secure={secureTextEntry}
          setSecure={setsScureTextEntry}
          onEndEditing={() => ValidationFunc("Password")}
        />
      </View>

      <TouchableOpacity style={styles.forgot_View}>
        <Text style={styles.forgot_text}>Forgot your Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Createbtn}
      onPress={()=>{signIn(email,password)}}
      >
        <Text style={styles.Createbtntxt}>Sign in</Text>

        <View style={styles.CreatebtnIcon}>
          <Icon name="arrow-forward" size={30} color="#fff" />
        </View>
      </TouchableOpacity>

      <View style={styles.sclmediaAcc}>
        <Text style={{ ...styles.mediatxt }}>
          Sing in by using your social media Account
        </Text>
        <View style={styles.mediaContainer}>
          <TouchableOpacity style={styles.mediaIcon}
          onPress={()=>signInWithGoogleAsync()}
          >
            <Icon name="logo-google" size={40} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.mediaIcon}>
            <Icon name="logo-twitter" size={40} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.mediaIcon}>
            <MaterialIcon name="facebook" size={40} color="#fff" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ marginTop: 30 }} onPress={()=>navigation.navigate("Sign Up")}>
          <Text style={styles.Bottom_Text}>
            Don't have an account?
            <Text style={styles.create}>Create</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Theme.colors.lightgray,
    // ...Platform.select({
    //   android: {
        // marginTop: 30,
    //   },
    // }),
  },

  UpperContainer: {
    height: Theme.sizes.height / 3,
    backgroundColor: Theme.colors.primaryColor,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },

  HeadingView: {
    width: "90%",
    height: "15%",
    marginLeft: 20,
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  firstHeading: {
    color: Theme.colors.black,
    fontSize: 25,
    
  },
  logoView: {
    // position:'absolute' ,
    // justifyContent:'flex-start',
    // right:-16,
    // top: -20  ,
  },
  logoStyle: {
    height: 90,
    width: 90,
    borderRadius: 30,
  },

  middleContainer: {
    backgroundColor: "white",
    position: "absolute",
    marginHorizontal: 20,
    marginTop: 120,
    borderRadius: 20,
    width: Theme.sizes.width - 40,
    paddingBottom: 30,
  },

  footerContainer: {
    flex: 2,
  },

  forgot_View: {
    position: "absolute",
    flexDirection: "row",
    bottom: 250,
    right: 30,
  },

  forgot_text: {
    color: Theme.colors.black,
    fontSize: 15,
    fontFamily: "IndieFlower",
  },

  buttonText: {
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 27,
    padding: 15,
    paddingLeft: 20,
  },

  Bottom_Text: {
    color: Theme.colors.black,
    fontFamily: "IndieFlower",
  },
  create: {
    color: Theme.colors.green,
  },
  Createbtn: {
    position: "absolute",
    flexDirection: "row",
    bottom: 200,
    right: 30,
  },
  Createbtntxt: {
    fontSize: 25,
    marginHorizontal: 5,
    fontFamily: "IndieFlower",
  },
  CreatebtnIcon: {
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: "#000",
  },
  sclmediaAcc: {
    position: "absolute",
    bottom: 50,
    
    justifyContent: "center",
    alignItems: "center",
  },
  mediatxt: { alignItems: "center", fontSize: 15, fontFamily: "IndieFlower" },
  mediaContainer: { flexDirection: "row", marginTop: 20 },
  mediaIcon: {
    backgroundColor: "#000",
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginHorizontal: 30,
  },
});
