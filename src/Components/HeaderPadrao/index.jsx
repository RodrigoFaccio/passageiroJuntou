import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { color, textos } from "../../constants/";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigate = useNavigation();
  return (
    <View style={styles.header}>
      <View>
        <TouchableOpacity onPress={() => navigate.goBack()}>
          <Feather name="arrow-left-circle" style={styles.backIcon} />
        </TouchableOpacity>
      </View>
      <View>
        <Image source={require("../../Assets/logo.png")} style={styles.Logo} />
      </View>
      <View>
        <TouchableOpacity>
          <Feather name="message-circle" style={styles.iconConversation} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    height: 90,
    paddingTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: color.button,
  },

  Logo: {
    marginTop: 10,
    height: 40,
    width: 150,
  },
  backIcon: {
    fontSize: 30,
    color: color.white,
  },
  iconConversation: {
    fontSize: 30,
    color: "transparent",
  },
});

export default Header;
