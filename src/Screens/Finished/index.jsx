import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import Header from "../../Components/HeaderPadrao";
import styles from "./styles";
import { color, textos } from "../../constants";

const Finished = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.box}>
        <Text style={styles.desc}>{textos.chegou}</Text>
      </View>

      <View style={styles.containerItem}>
        <Text style={styles.desc}>{textos.pague}</Text>
      </View>

      <View style={styles.boxValue}>
        <Text style={styles.descValue}>R$5,00</Text>
      </View>

      <View style={styles.viewButtonConfirm}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.TextButton}>{textos.agendar}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Finished;
