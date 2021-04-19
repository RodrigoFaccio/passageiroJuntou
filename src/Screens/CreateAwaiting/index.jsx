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

const CreateAwaiting = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.title}>{textos.quase}</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.desc}>{textos.quaseMessage}</Text>
      </View>

      <View style={styles.viewButtonConfirm}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Confirmed")}
        >
          <Text style={styles.TextButton}>{textos.cancelar}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateAwaiting;
