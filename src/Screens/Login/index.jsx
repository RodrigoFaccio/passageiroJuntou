import React, { useState,useContext } from "react";
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
import { textos } from "../../constants";
import axios from 'axios';
import {useAuth} from '../../context/AuthContext';
import api from '../../api';

const Login = ({ navigation }) => {
 

  const [email, setEmail] = useState("rodrigoP@gmail.com");
  const [password, setPassword] = useState("123456");
  const {signIn,user} = useAuth();
  console.log(user);


  

  async function handleLogin() {
   const response  = await api.post('/passageiro/login',{
     email,
     password
   });
   signIn({
     email:response.data.email,
     token:response.data.token
   });

  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.viewLogo}>
          <Image
            source={require("../../Assets/logo.png")}
            style={styles.Logo}
          />
        </View>

        <View>
          <View style={styles.viewInput}>
            <TextInput
              placeholder={textos.email}
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(email) => setEmail(email)}
              value={email}
            />
            <TextInput
              placeholder={textos.senha}
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
              onChangeText={(pass) => setPassword(pass)}
              value={password}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => handleLogin()}
            >
              <Text style={styles.TextButton}>{textos.entrar}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.registerView}>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={styles.cadastrar}>{textos.cadastrar}</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.recuperar}>{textos.recuperar}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
