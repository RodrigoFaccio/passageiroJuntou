import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Text,
  StatusBar,
  Alert,
} from "react-native";
import styles from "./styles";
import { Feather, EvilIcons } from "@expo/vector-icons";
import { textos } from "../../constants";
import * as ImagePicker from "expo-image-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Permissions from "expo-permissions";
import Header from "../../Components/HeaderPerfil";

const Register = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmpass] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [image, setImage] = useState("");

  async function handleRegister() {
    email == "" || password == ""
      ? Alert.alert("Insira os dados e tente novamente")
      : Alert.alert("show");
  }

  useEffect(() => {
    getPermissionAsync();
  }, []);

  async function getPermissionAsync() {
    if (Platform.OS !== "web") {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  }

  async function pickImage() {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImage(result.uri);
      }
    } catch (E) {
      console.log(E);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Header />

        <View style={styles.imageView}>
          {image == "" ? (
            <TouchableOpacity onPress={() => pickImage()}>
              <View style={styles.borderIcon}>
                <EvilIcons name="camera" color="#fff" size={43} />
              </View>
              <Text style={styles.IconText}>{textos.adicionar}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => pickImage()}>
              <View>
                <Image source={{ uri: image }} style={styles.borderIcon} />
              </View>
              <Text style={styles.IconText}>{textos.alterar}</Text>
            </TouchableOpacity>
          )}
        </View>

        <View>
          <View style={styles.viewInput}>
            <TextInput
              placeholder={textos.nome}
              style={styles.input}
              onChangeText={(nome) => setNome(nome)}
              value={nome}
            />
            <TextInput
              placeholder={textos.email}
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(email) => setEmail(email)}
              value={email}
            />

            <TextInput
              placeholder={textos.whatsapp}
              style={styles.input}
              keyboardType="decimal-pad"
              autoCapitalize="none"
              onChangeText={(whatsapp) => setWhatsapp(whatsapp)}
              value={whatsapp}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => handleRegister()}
            >
              <Text style={styles.TextButton}>{textos.alterarprofile}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonSair}
              onPress={() => navigation.replace("Root")}
            >
              <Text style={styles.TextButton}>{textos.loggout}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Register;
