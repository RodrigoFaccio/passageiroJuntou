import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StatusBar,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image
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


const DisembarkDistrict = ({ navigation,route }) => {
  const [checked, setChecked] = useState(false);
  const [search,setSearch] = useState('');
  const [disembark,setDistrictDisembark] = useState([]);
  const url='http://192.168.0.125:3005';
  const [data,setData] = useState([]);
  const [dataSearch,setDataSearch] = useState([]);

  useEffect(()=>{
	  async function DistrictDisembark(){
		const dominate =await AsyncStorage.getItem('@juntouApp:dominante');
		if(dominate==1){
			//Bairro dominate então mostrar bairros secundários
			const {data} = await api.get(`/bairro/n/like/noDominante`)
			setData(data);
			
		}else{
			const {data} = await api.get(`/bairro/n/like/dominante`)
			setData(data);
		}
	}	  
	  DistrictDisembark();
	  async function Search(search){
		if(search){
		  //console.log(search)
		  const dominate =await AsyncStorage.getItem('@juntouApp:dominante');
		  if(dominate==1){
			  //Bairro dominate então mostrar bairros secundários
			  const {data} = await api.get(`/bairro/${search}/like/noDominante`)
			  setDataSearch(data);
			  
		  }else{
			  const {data} = await api.get(`/bairro/${search}/like/dominante`)
			  setDataSearch(data);
		  }
		  
		}else{
		  setData([])
		}
	  }
	  Search(search);

  },[search])

  async function saveDisembarkDistrict(idDisembarkDistrict){
	  
	await AsyncStorage.setItem('@juntouApp:idDisembarkDistrict',JSON.stringify(idDisembarkDistrict.id))

	navigation.navigate("DisembarkPoint");
	
	
}

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <View style={styles.search} >
          <SearchBar
            lightTheme={true}
            placeholder="Pesquise o bairro de  desembarque"

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
						<TouchableOpacity onPress={()=>{saveDisembarkDistrict(item)}} key={item.id}  style={styles.ViewNameEmbarque}>
						
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
      
					<TouchableOpacity onPress={() => saveDisembarkDistrict(item)}>
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

export default DisembarkDistrict;
