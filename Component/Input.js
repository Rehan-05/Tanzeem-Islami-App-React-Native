import React from "react";
import { View, TextInput, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Theme } from "../Theme/Theme";

export default function Input({
  firstIconName,
  ndIcon,
  placeholder,
  value,
  onChange,
  secure,
  setSecure,
  margintop,
  paddinBottom,
  ref,
  onSubmitEditing,
  ...rest
}) {
    
  return (
    <View
      style={[
        styles.inpStyle,
        { marginTop: margintop == null ? 0 : margintop, paddingBottom: paddinBottom == null ? 0 : paddinBottom},
      ]}
    >
      <Icon
        name={firstIconName}
        size={25}
        color="#000"
        style={[styles.iconStyle, { flex: 1 }]}
      />
      <TextInput
        {...rest}
        ref={ref}
        onSubmitEditing={onSubmitEditing}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        
        style={[
          styles.txtinput,
          {
            flex: ndIcon == null ? 9 : 8,
          },
        ]}
      />
      {ndIcon != null ? (
        <TouchableOpacity 
        style={{
        marginTop:10,
        marginRight:5
        }}
        onPress={()=>{
            setSecure(!secure)
        }}
        >
        <Icon
          name={ndIcon}
          size={25}
          color="#000"
          style={[styles.iconStyle]}
        />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  inpStyle: {
    height: 50,
    flexDirection: "row",
    borderRadius: 20,
    borderColor: Theme.colors.black,
    borderWidth: 1,
    marginHorizontal: 10,
    alignItems: "center",
    zIndex:1
  
  },
  iconStyle: { marginLeft: 5, flex: 1 },
  txtinput: {
    marginLeft: 5,
    fontSize: 16,
    textDecorationLine: "none",
    marginHorizontal: 5,
    
  },
});
