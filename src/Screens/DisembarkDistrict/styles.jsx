import React from "react";
import { StyleSheet, Platform } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { color } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  embarks:{
    marginTop:5,
    padding:10,
    width:wp("90%"),
    alignItems:"center"

  },
  textName:{
    fontSize:20,
    marginLeft:8,
    padding:10

  },
  textEmbark:{
    fontSize:20,
    textTransform:"uppercase"
  },
  search:{
	width:wp("90%"),
	marginLeft:wp("5%"),
  },
  textNameEmbarque:{
	fontSize:20,

	
  },
  ViewNameEmbarque:{
	justifyContent:"center",
	alignItems:"center",
	padding:20,
	borderRadius:20,
	borderWidth:2,
	width:wp("90%"),
	marginLeft:wp("5%")
	
  }
  
});

export default styles;
