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
  title: {
    marginTop: 30,
    fontSize: 40,
    color: color.gray,
    textAlign: "center",
  },
  desc: {
    marginTop: 12,
    fontSize: 24,
    color: color.gray,
    textAlign: "center",
    marginLeft: 30,
    marginRight: 30,
  },

  box: {
    marginTop: hp("10%"),
    height: 80,
    width: wp("90%"),
    borderRadius: 12,
    borderWidth: 1,
    borderColor: color.gray,
    alignItems: "center",
    alignSelf: "center",
  },
  containerItem: {
    marginTop: 20,
  },

  boxValue: {
    marginTop: hp("5%"),
    height: 50,
    width: 120,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: color.gray,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },

  descValue: {
    fontSize: 24,
    color: color.gray,
    textAlign: "center",
  },

  viewButtonConfirm: {
    marginTop: hp("18%"),
    alignSelf: "center",
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
    marginTop: hp("1%"),
  },

  TextButton: {
    textAlign: "center",
    fontSize: 22,
    color: color.white,
    fontFamily: "risque",
  },
});

export default styles;
