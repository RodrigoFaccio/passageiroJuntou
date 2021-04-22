import React from "react";
import { StyleSheet, Platform } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { color } from "../../constants/";

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: -100
	  },
 modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
	width:400,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
	width:wp("90%")
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: color.button,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
	fontSize:15
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
	fontSize:20,
	padding:2,
	marginTop:10

  },
  modalTextSelected: {
    marginBottom: 15,
    textAlign: "center",
	fontSize:20,
	padding:2,
	marginTop:10,
	backgroundColor:"#eee8e8",
	width:'100%',
	borderRadius:16,
	height:40

  },
  plusView: {
    marginTop: 35,
    alignSelf: "center",
  },
  plusText: {
    marginTop: 10,
    color: color.button,
    fontSize: 50,
  },
  hours:{
	alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 1,
	width:wp("60%"),
  },
  hoursSelected:{
	alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 1,
	width:wp("60%"),
	backgroundColor:"#eee2e2"
  }
});

export default styles;
