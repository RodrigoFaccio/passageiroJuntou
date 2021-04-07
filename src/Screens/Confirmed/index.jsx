import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { CheckBox } from "react-native-elements";
import Header from "../../Components/HeaderConfirmed";
import styles from "./styles";
import { color, textos } from "../../constants";
import { Feather } from "@expo/vector-icons";

const Confirmed = ({ navigation }) => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.valueView}>
        <Text style={styles.value}>R$5,00</Text>
      </View>

      <View style={styles.containerItem}>
        <View style={styles.item}>
          <View style={styles.point} />
          <Text style={styles.itemText}>Bairro Honório Bicalho</Text>
        </View>

        <View style={styles.item}>
          <View style={styles.point} />
          <Text style={styles.itemText}>Bairro Centro de Nova Lima</Text>
        </View>
      </View>

      <View style={styles.box}>
        <View>
          <Text
            style={[
              styles.itemText,
              { textAlign: "center", fontSize: 20, marginTop: 16 },
            ]}
          >
            Ás 11:30 esteja na praça da estação em Honório bicalho.
          </Text>
        </View>
      </View>

      <View style={styles.boxContainer}>
        <View style={styles.viewImage}>
          <Image source={require("../../Assets/avatar.png")} />
        </View>
        <View style={styles.containerItens}>
          <View>
            <TouchableOpacity>
              <Feather name="message-circle" color="gray" size={35} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.itemTextContainer}>Gabriel Luciano Silva</Text>
            <Text style={styles.itemTextContainer}>Fiat Mobi preto</Text>
            <Text style={styles.itemTextContainer}>GQE-7898</Text>
            <TouchableOpacity>
              <Text style={styles.localizationText}>Localização</Text>
            </TouchableOpacity>
          </View>
          <View>
            <View style={styles.numberView}>
              <Text style={styles.number}>3</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.viewButtonConfirm}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Finished")}
        >
          <Text style={styles.TextButton}>{textos.cancelar}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Confirmed;
