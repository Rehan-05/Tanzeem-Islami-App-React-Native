import {Dimensions} from 'react-native'

const {height,width} = Dimensions.get('screen');

export const Theme = {
    colors: {
      primaryColor: "#48bd63",
      primaryColorDark: "#ffffff",
      textColor: "#323232",
      lightgray:"#d3d3d3",
      black: "#000000",
      gray: "gray",
      blue:"#3463b3",
      lightgray: "lightgray",
      green: "#2db074",
      red: '#D73019',
      yellow: "#f7fa39",
      yellowDark: "#cdcf67",
      _yellow: "#EEAE1A",
      windowBackground: "#f9fbfc",
      navbarActiveColor: "#2db074",
      navbarInactiveColor: "lightgray",
      
      White: "white",
      Red:"red",
      touchableHighlightUnderlayColor: "#f0f0f0",
    },
    sizes: {
      boxBorderRadius: 12,
      inputHeight: 50,
      separatorSize: 12,
      HorizentalMargin:20,
      verticalMargin:5,
      height,
      width,

    },
    
  };