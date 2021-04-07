import React from "react";
import { StyleSheet, Platform } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { color } from "../../constants/";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },

  viewIcon: {
    marginTop: hp("5%"),
    marginLeft: wp("3%"),
  },

  icon: {
    color: color.button,
    fontSize: 30,
  },

  viewLogo: {
    marginTop: hp("1%"),
    alignSelf: "center",
  },
  Logo: {
    width: wp("55%"),
    height: 60,
  },
  viewInput: {
    marginTop: hp("2%"),
    alignSelf: "center",
  },
  input: {
    backgroundColor: color.white,
    width: wp("90%"),
    height: 54,
    paddingHorizontal: 30,
    borderRadius: 50,
    color: color.gray,
    fontSize: 22,
    marginTop: hp("2%"),
    fontFamily: "risque",
    borderWidth: 1,
    borderColor: color.gray,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  borderIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: color.button,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: hp("2%"),
  },
  imageView: {
    alignSelf: "center",
    width: 150,
  },

  IconText: {
    textAlign: "center",
    marginTop: 5,
    color: color.button,
    fontFamily: "risque",
    fontSize: 20,
  },

  button: {
    justifyContent: "center",
    backgroundColor: color.button,
    width: wp("90%"),
    height: 54,
    paddingHorizontal: 30,
    borderRadius: 50,
    color: color.gray,
    fontSize: 18,
    marginTop: hp("3%"),
  },
  TextButton: {
    textAlign: "center",
    fontSize: 22,
    color: color.white,
    fontFamily: "risque",
  },
});

export default styles;
