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
import styles from "./styles";
import { color, textos } from "../../constants";
import axios from 'axios';
import SearchList from '../Search';
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-community/async-storage';


const Home = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [checked, setChecked] = useState(false);
  const [data,setData] = useState([]);
  const url='http://192.168.0.125:3005'
  useEffect(()=>{
    async function Search(search){
      if(search){
        const response = await axios.get(url+`/bairro/${search}/pesquisa`);
        setData(response.data);
      }else{
        setData([])
      }
      
    }
    Search(search);

  },[search])

  

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <View>
          <SearchBar
            lightTheme={true}
            placeholder="Pesquise o endereço"
            onChangeText={(search) => setSearch(search)}
            value={search}
            containerStyle={{ backgroundColor: "#fff" }}
            inputContainerStyle={{
              backgroundColor: "#fff",
            }}
          />
        </View>

        <ScrollView style={styles.search}  >
        <View style={styles.search}>
          {data.map((item)=>(
            <SearchList item={item} key={item.id}/>
          ))}
        </View>
        </ScrollView>
        
       

          
        
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Home;
