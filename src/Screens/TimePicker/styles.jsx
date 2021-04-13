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
  viewButton: {
    marginTop: hp("15%"),
    alignSelf: "center",
  },
  valueView: {
    marginTop: hp("3%"),
    height: 50,
    width: 130,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: color.gray,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  value: {
    fontSize: 20,
    color: color.gray,
  },

  box: {
    marginTop: hp("3%"),
    height: 190,
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

  item: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    alignSelf: "center",
  },

  point: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: color.button,
    marginRight: 10,
  },
  itemText: {
    fontSize: 16,
    color: color.gray,
  },

  buttonHour: {
    backgroundColor: "#3A373E",
    height: 45,
    width: wp("90%"),
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
	marginTop:10,
	marginLeft:-wp("5%"),
  },

  buttonHourText: {
    fontSize: 20,
    color: color.white,
  },
  containerHours: {
    marginTop: 20,
    flexDirection: "column",
    justifyContent: "space-around",
    marginLeft: 50,
    marginRight: 50,
  },

  plusView: {
    marginTop: -30,
    alignSelf: "center",
  },
  plusText: {
    marginTop: 10,
    color: color.button,
    fontSize: 50,
  },

  containerHours2: {
    marginTop: -5,
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: 50,
    marginRight: 50,
  },

  viewButtonConfirm: {
    marginTop: hp("10%"),
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
