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
  SafeAreaView,
} from "react-native";
import styles from "./styles";
import { textos } from "../../constants";
import axios from 'axios';
import api from '../../api';
import AuthContext, { AuthProvider } from '../../context/auth';
import * as Animatable from 'react-native-animatable';
import { KeyboardAvoidingView } from "react-native";



const Login = ({ navigation }) => {
 

  const [email, setEmail] = useState("rodrigopassageiro@gmail.com");
  const [password, setPassword] = useState("123456");
  
  const { signed, user,signIn } = useContext(AuthContext);
  const [errorMessage,setErrorMessage] = useState('');




  

  async function handleLogin() {
	console.log('das')

		try{
			const {data}  = await api.post('/passageiro/login',{
				email,
				password
			  });
			  console.log(data);
			  signIn({
			
				token:data.token,
				id:data.id,
				email:data.email
			})
		}catch(err){
			console.log(err);
			setErrorMessage('E-mail ou senha incorretos');

			
		}
		
		 
			 
		  
		  
		 

   


  }

  return (
   <SafeAreaView style={styles.Keycontainer}>
	   <View style={styles.container}>

	   </View>
		
        <StatusBar barStyle="light-content" />
        <View style={styles.viewLogo}>
          <Image
            source={require("../../Assets/logo.png")}
            style={styles.Logo}
          />
        </View>
		

          <View style={styles.viewInput}>
			  <View style={{justifyContent:'center',alignItems:'center'}}>
			  <Animatable.View duration={500} animation="fadeInLeft">
				<Text style={styles.errorMessage}>{errorMessage}</Text>
			</Animatable.View>
			  </View>
		  
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
              onPress={handleLogin}
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
	  </SafeAreaView>
  );
};

export default Login;
