import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { CheckBox } from "react-native-elements";
import Header from "../../Components/HeaderPadrao";
import styles from "./styles";
import { color, textos } from "../../constants";

const SelectHour = ({ navigation }) => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.valueView}>
        <Text style={styles.value}>R$5,00</Text>
      </View>

      <View style={styles.box}>
        <View style={styles.containerItem}>
          <View style={styles.item}>
            <View style={styles.point} />
            <Text style={styles.itemText}>Bairro Honório Bicalho</Text>
          </View>

          <View style={styles.item}>
            <View style={styles.point} />
            <Text style={styles.itemText}>Bairro Centro de Nova Lima</Text>
          </View>

          <View>
            <CheckBox
              title="Praça  da rodoviaria - Honório Bicalho"
              checked={checked}
              onPress={() => setChecked(!checked)}
              checkedColor={color.button}
              containerStyle={{
                backgroundColor: "#fff",
                borderColor: "transparent",
              }}
            />
            <CheckBox
              title="Praça do mineiro (Próximo a Prefeitura)"
              checked={checked}
              onPress={() => setChecked(!checked)}
              checkedColor={color.button}
              containerStyle={{
                backgroundColor: "#fff",
                borderColor: "transparent",
                marginTop: -13,
              }}
            />
          </View>
        </View>
      </View>

      <View style={[styles.containerHours, { marginTop: 50 }]}>
        <TouchableOpacity>
          <View style={styles.buttonHour}>
            <Text style={styles.buttonHourText}>09:30</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.buttonHour}>
            <Text style={styles.buttonHourText}>11:30</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.buttonHour}>
            <Text style={styles.buttonHourText}>13:30</Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.plusView}>
        <View>
          <Text style={styles.plusText}>+</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.containerHours2}>
        <TouchableOpacity>
          <View style={styles.buttonHour}>
            <Text style={styles.buttonHourText}>15:30</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.buttonHour}>
            <Text style={styles.buttonHourText}>16:00</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.buttonHour}>
            <Text style={styles.buttonHourText}>20:30</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.viewButtonConfirm}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("CreateGroupe")}
        >
          <Text style={styles.TextButton}>{textos.confirmarvaga}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectHour;
