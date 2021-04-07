import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { color } from "../../constants/";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigate = useNavigation();
  return (
    <View style={styles.header}>
      <View>
        <TouchableOpacity
          onPress={() => navigate.navigate("Profile")}
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            backgroundColor: "transparent",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 25,
          }}
        >
          <Ionicons name="person-circle-sharp" color="#fff" size={40} />
        </TouchableOpacity>
      </View>

      <View>
        <Image source={require("../../Assets/logo.png")} style={styles.Logo} />
      </View>
      <View>
        <TouchableOpacity
          style={{
            height: 35,
            width: 35,
            borderRadius: 35 / 2,
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 25,
          }}
        >
          <Ionicons name="ios-call" color={color.button} size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 90,
    width: "100%",
    backgroundColor: color.button,
    padding: 15,
  },
  Logo: {
    marginTop: 30,
    height: 40,
    width: 150,
  },
});

export default Header;
