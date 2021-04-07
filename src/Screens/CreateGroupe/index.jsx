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

const CreateGroupe = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />

      <View>
        <Text style={styles.title}>{textos.juntando}</Text>
        <Text style={styles.desc}>{textos.juntandodesc}</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.desc}>{textos.juntandoMessage}</Text>
      </View>

      <View style={styles.viewButtonConfirm}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("CreateAwaiting")}
        >
          <Text style={styles.TextButton}>{textos.cancelar}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateGroupe;
