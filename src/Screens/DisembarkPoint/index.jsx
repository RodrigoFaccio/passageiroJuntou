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

const PointDisembark = ({ navigation,route }) => {
  const [checked, setChecked] = useState(false);
  const [search,setSearch] = useState();
  const [embarks,setEmbark] = useState([]);
  const url='http://192.168.0.125:3005';

  useEffect(()=>{

	
		async function SearchEmbarque(){
		const idDisembarkDistrict =await AsyncStorage.getItem('@juntouApp:idDisembarkDistrict');

			const {data} = await axios.get(url+`/point/${idDisembarkDistrict}/list`)
			setEmbark(data);
			console.log("----------------")
		}
		SearchEmbarque();
	
		
		  
	
	  
  },[search])

  async function saveEmbark(idPointEmbark){
	  
	await AsyncStorage.setItem('@juntouApp:idPointDisembark',JSON.stringify(idPointEmbark))
	navigation.navigate("SelectHour");
	
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
			<View>
				{embarks.map(item=>{
					return(
					<TouchableOpacity onPress={()=>{saveEmbark(item.id)}} key={item.id} style={styles.ViewNameEmbarque}>
						
						<Text style={styles.textNameEmbarque}>{item.name}</Text>
						<Image style={{width:30,height:30,marginLeft:210,marginTop:-25}} source={require('../../Assets/seta-direita.png')}/>
					</TouchableOpacity>
				)})}
				 
			</View>
		</View>

       
        
       

          
        
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PointDisembark;
