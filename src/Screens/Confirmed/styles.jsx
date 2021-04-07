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
  boxContainer: {
    marginTop: hp("10%"),
    height: 180,
    width: wp("90%"),
    borderRadius: 12,
    borderWidth: 1,
    borderColor: color.gray,
    alignSelf: "center",
  },
  viewImage: {
    alignSelf: "center",
    marginTop: -50,
  },

  containerItens: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
  },

  itemTextContainer: {
    fontSize: 20,
    color: color.gray,
  },

  localizationText: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 20,
    color: color.button,
    textDecorationLine: "underline",
  },

  viewButtonConfirm: {
    marginTop: hp("5%"),
    alignSelf: "center",
  },
  numberView: {
    marginTop: -60,
    height: 45,
    width: 45,
    borderRadius: 45 / 2,
    backgroundColor: color.button,
    justifyContent: "center",
    alignItems: "center",
  },

  number: {
    fontSize: 30,
    color: color.white,
    fontFamily: "risque",
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
