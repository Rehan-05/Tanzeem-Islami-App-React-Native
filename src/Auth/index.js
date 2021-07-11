import React, { useState, useEffect, useRef } from "react";

import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  KeyboardAvoidingView,
  StatusBar,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import * as Fonts from "expo-font";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Input from "../../Component/Input";
import { Theme } from "../../Theme/Theme";

import Firebase from '../FireBase/FirebaseCofigfile'
import { registration } from "../FireBase/AuthProvider";

const useFocus = () => {
  const htmlElRef = useRef(null);
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };
  return [htmlElRef, setFocus];
};
export default function Signup({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [Password, setPassword] = useState("");
  const [Cpass, setCpass] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("+92");
  const [Address, setAddress] = useState("");

  const [secureTextEntry, setsScureTextEntry] = useState(true);
  const [secureTextEntry1, setsScureTextEntry1] = useState(true);
  const [KeyboardAvoiding, setKeyboardAvoiding] = useState(false);

  const [fullNameValid, setFullNameValid] = useState(false);
  const [EmailValid, setEmailValid] = useState(false);
  const [PasswordValid, setPasswordValid] = useState(false);
  const [CpassValid, setCpassValid] = useState(false);

  const [PhoneValid, setPhoneValid] = useState(false);
  const [AddressValid, setAddressValid] = useState(false);

  const [register, setRegister] = useState(false);





   


  const ValidationFunc = (type) => {
    let namereg = /^[A-Za-z ]+$/;
    let emailreg =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let numberreg = /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/;
    let passwordreg = /(?=.{8,})/;
    let Postcode = /^[0-9]{5}$/;
    switch (type) {
      case "Name":
        if (namereg.test(fullName) && fullName.length >= 3) {
          setFullNameValid(true);
        } else {
          setFullNameValid(false);
        }
        break;
      case "Address":
        if (namereg.test(Address) && Address.length >= 5) {
          setAddressValid(true);
        } else {
          setAddressValid(false);
        }
        break;
      case "email":
        if (emailreg.test(Email) && Email.length >= 5) {
          setEmailValid(true);
        } else {
          console.log(emailreg.test(Email));
          setEmailValid(false);
        }
        break;
      case "Phone":
        if (numberreg.test(Phone) && Phone.length >= 5) {
          setPhoneValid(true);
        } else {
          setPhoneValid(false);
        }
        break;
      case "Password":
        if (passwordreg.test(Password) && Password.length >= 8) {
          setPasswordValid(true);
        } else {
          setPasswordValid(false);
        }
        break;
      case "ConfirmPasswod":
        if (passwordreg.test(Cpass) && Cpass.length >= 8) {
          setCpassValid(true);
        } else {
          setCpassValid(false);
        }
        break;
      default:
        if (
          fullNameValid &&
          PhoneValid &&
          EmailValid &&
          PasswordValid &&
          CpassValid &&
          AddressValid &&
          Password === Cpass
        ) {
          setRegister(true);
          console.log("valid");
        } else {
          Alert.alert("Error", "Your password was not match", [
            {
              text: "Enter again!",
              onPress: () => {},
              style: "default",
            },
          ]);
          setRegister(false);
        }
        break;
    }
  };

  const [loaded] = useFonts({
    Pattaya: require("../../assets/fonts/Pattaya-Regular.ttf"),
    IndieFlower: require("../../assets/fonts/IndieFlower-Regular.ttf"),
    FingerPaint: require("../../assets/fonts/Pattaya-Regular.ttf"),
  });
  if (!loaded) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <StatusBar style="auto" />
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={KeyboardAvoiding}
      // keyboardVerticalOffset={100}
    >
      {/* <ScrollView style={styles.container}> */}
      <StatusBar />

      <View style={styles.UpperContainer}>
        <Text style={{ ...styles.crtStyle, fontFamily: "FingerPaint" }}>
          Create Account
        </Text>
        <Image
          source={require("./../../assets/Tanzeem.png")}
          style={styles.imgLogo}
        />
      </View>

      {/* <Text style={{fontSize:100}}>slkdjflskdjfl;kDSJlksjdslkjdfskdfkjsb ksnlkcJChklS zkL kc</Text> */}

      <View style={styles.formContainer}>
        <Input
          maxLength={20}
          firstIconName="person-outline"
          placeholder="First Name"
          margintop={0}
          value={fullName}
          onChange={(text) => setFullName(text)}
          onEndEditing={() => ValidationFunc("Name")}
          ndIcon={fullNameValid ? "checkmark" : null}
        />

        <Input
          firstIconName="mail-outline"
          placeholder="Enter your Email"
          margintop={10}
          maxLength={30}
          value={Email}
          onChange={(text) => setEmail(text)}
          onEndEditing={() => ValidationFunc("email")}
          ndIcon={EmailValid ? "checkmark" : null}
        />

        <Input
          firstIconName="md-home-outline"
          placeholder="Enter your City"
          maxLength={40}
          margintop={10}
          value={Address}
          onChange={(text) => setAddress(text)}
          onEndEditing={() => ValidationFunc("Address")}
          ndIcon={AddressValid ? "checkmark" : null}
        />

        <Input
          firstIconName="call-outline"
          placeholder="Enter you Phone Number"
          maxLength={Phone.slice(0, 3) == "+92" ? 13 : 15}
          margintop={10}
          value={Phone}
          onChange={(text) => setPhone(text)}
          setSecure={setsScureTextEntry1}
          onEndEditing={() => ValidationFunc("Phone")}
          ndIcon={PhoneValid ? "checkmark" : null}
        />

        <Input
          firstIconName="lock-closed-outline"
          placeholder="Password"
          maxLength={30}
          margintop={10}
          value={Password}
          secureTextEntry={secureTextEntry}
          onChange={(text) => setPassword(text)}
          ndIcon={secureTextEntry ? "eye-outline" : "eye-off-outline"}
          secure={secureTextEntry}
          setSecure={setsScureTextEntry}
          onEndEditing={() => ValidationFunc("Password")}
        />

        <Input
          firstIconName="lock-closed-outline"
          placeholder="Confirm Password"
          margintop={10}
          value={Cpass}
          secureTextEntry={secureTextEntry1}
          onChange={(text) => setCpass(text)}
          maxLength={30}
          ndIcon={secureTextEntry1 ? "eye-outline" : "eye-off-outline"}
          secure={secureTextEntry1}
          setSecure={setsScureTextEntry1}
          onFocus={() => setKeyboardAvoiding(true)}
          onBlur={() => setKeyboardAvoiding(false)}
          onEndEditing={() => {
            ValidationFunc("ConfirmPasswod");
            
          }}
        />
      </View>

      <View style={styles.sclmediaAcc}>
        <TouchableOpacity style={styles.Createbtn}
        
        onPress={()=>{
          ValidationFunc()
          if(register)
          {
            registration(Email,Password,fullName,Address,Phone)
           
          }
        }}
        >
          <Text style={styles.Createbtntxt}>Create Account</Text>

          <View style={styles.CreatebtnIcon}>
            <Icon name="arrow-forward" size={30} color="#fff" />
          </View>
        </TouchableOpacity>
        <Text style={{ ...styles.mediatxt }}>
          Create Account Using Social Media Account
        </Text>
        <View style={styles.mediaContainer}>
          <TouchableOpacity style={styles.mediaIcon}>
            <Icon name="logo-google" size={40} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.mediaIcon}>
            <Icon name="logo-twitter" size={40} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.mediaIcon}>
            <MaterialIcon name="facebook" size={40} color="#fff" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ ...styles.mediatxt }}>already have an account?</Text>
          <Text style={styles.create}>Login</Text>
        </TouchableOpacity>
      </View>
      {/* </ScrollView> */}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Theme.sizes.height,
    backgroundColor: Theme.colors.lightgray,
  },
  UpperContainer: {
    height: Theme.sizes.height / 3,
    backgroundColor: Theme.colors.primaryColor,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    flexDirection: "row",
    zIndex: 0,
    // elevation:-1
  },
  formContainer: {
    // elevation:1,
    zIndex: 1,
    // paddingBottom:10,
    backgroundColor: Theme.colors.windowBackground,
    // position: "absolute",
    width: Theme.sizes.width - 40,
    borderRadius: 20,
    marginHorizontal: 20,
    // top:100,

    // position:'absolute',
    paddingVertical: 10,
    top: -(Theme.sizes.height / 3 - Theme.sizes.height / 3 / 2.5),
  },
  footerContainer: {
    backgroundColor: "#000",
  },
  crtStyle: {
    fontSize: 30,
    marginLeft: 10,
    marginTop: 30,
  },
  imgLogo: {
    height: 100,
    width: 100,
    backgroundColor: Theme.colors.primaryColor,
    paddingHorizontal: 10,
    padding: 10,
    marginLeft: 30,
  },
  create: {
    color: Theme.colors.green,
  },
  Createbtn: {
    position: "absolute",
    flexDirection: "row",
    top: -70,
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
  sclmediaAcc: { justifyContent: "center", alignItems: "center", top: -50 },
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
