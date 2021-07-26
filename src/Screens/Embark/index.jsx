import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StatusBar,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  ActivityIndicator
} from "react-native";
import { SearchBar, CheckBox } from "react-native-elements";
import Header from "../../Components/HeaderHome";
import styles from "./styles";
import { color, textos } from "../../constants";
import axios from 'axios';
import SearchList from '../Search';
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-community/async-storage';
import api   from  '../../api.js';
import ListLocale from "../../Components/ListLocale";



const Embark = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
  const [search,setSearch] = useState('');
  const [embark,setEmbark] = useState([]);
  const [data,setData] = useState([]);
  const [dataSearch,setDataSearch] = useState([]);
  const [loading,setLoad] = useState(true);


  
  const url='http://192.168.0.125:3005';
  

  useEffect(()=>{
	async function bairrosRequest(){
		const idDistrictEmbark = await AsyncStorage.getItem('@juntouApp:idDistrictEmbark');
		setEmbark(idDistrictEmbark);
		const {data} = await api.get(`/point/${idDistrictEmbark}/list`)
		setData(data)
		setLoad(false)
	  }
	  bairrosRequest();
    async function Search(search){
      if(search){
		//console.log(search)

			const {data} = await api.get(`/point/${search}/${embark}/pesquisa`)

	   setDataSearch(data)
        
      }else{
        setData([])
      }
    }
    Search(search);
	

	

	
  },[search]);



  async function saveEmbark(idPointEmbark){
	  
	await AsyncStorage.setItem('@juntouApp:idPointEmbark',JSON.stringify(idPointEmbark.id))
	
	navigation.navigate("DisembarkDistrict");
	
}
if(loading){
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size="large" color="#666" />

        </View>
    );
}

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <View style={styles.search} >
          <SearchBar
            lightTheme={true}
            placeholder="Pesquise o ponto de embarque"

            onChangeText={(search) => setSearch(search)}
            value={search}
            containerStyle={{ backgroundColor: "#fff" }}
            inputContainerStyle={{
              backgroundColor: "#fff",
            }}
          />
        </View>
		<View>
		{
			search==[]?
			(
				<View>
				{data.map(item=>{
					return(
						<TouchableOpacity onPress={()=>{saveEmbark(item)}} key={item.id}  style={styles.ViewNameEmbarque}>
						
						<Text style={styles.textNameEmbarque}>{item.name}</Text>
					</TouchableOpacity>
				)})}
				 
			</View>
			):
			( 
				<ScrollView style={styles.search}  >
				<View style={styles.search}>
				  {dataSearch.map((item)=>(
					<View key={item.id} style={styles.container}>
      
					<TouchableOpacity onPress={() => saveEmbark(item)}>
					  <Text style={styles.textName}>{item.name}</Text>

					</TouchableOpacity>
			   </View>
				  ))}
				</View>
				</ScrollView>)
		}
		</View>

       
        
       

          
        
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Embark;