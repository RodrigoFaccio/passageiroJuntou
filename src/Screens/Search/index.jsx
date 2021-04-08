import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StatusBar,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { SearchBar, CheckBox } from "react-native-elements";
import Header from "../../Components/HeaderHome";
import styles from  './styles';
import { color, textos } from "../../constants";
import axios from 'axios';
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
 

const SearchList = ({item }) => {
  const navigation = useNavigation();
  async function saveBairroEmbark(item){
	await AsyncStorage.setItem('@juntouApp:dominante',JSON.stringify(item.dominante))
	await AsyncStorage.setItem('@juntouApp:idDistrictEmbark',JSON.stringify(item.id))
	
	navigation.navigate("Embark");
  }
  return(
     <View style={styles.container}>
      
          <TouchableOpacity onPress={() => saveBairroEmbark(item)}>
            <Text style={styles.textName}>{item.name}</Text>
          </TouchableOpacity>
     </View>
  );
};

export default SearchList;
