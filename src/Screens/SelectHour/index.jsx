import React, { useState,useEffect } from "react";
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
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import TimePicker from '../TimePicker'


const SelectHour = ({ navigation }) => {
  const [checked, setChecked] = useState(false);

  // dados das viagens 
  const [district,setDistrict] = useState();
  const [districtDisembark,setDistrictDisembark] = useState();
  const [pointEmbark,setPointEmbark] = useState();
  const [pointDisembark,setPointDisembark] = useState();
  const [hours,setHours] = useState([]);

  // horario
  const [selectedHours, setSelectedHours] = useState(0);
  const [selectedMinutes, setSelectedMinutes] = useState(0);


  

  const url='http://192.168.0.125:3005';

	useEffect(() => {
		//Buscar Nome do bairro
		async function DistrictEmbark(){
			const idDistrictEmbark = await AsyncStorage.getItem('@juntouApp:idDistrictEmbark')
			const {data} = await axios.get(url+`/bairro/${idDistrictEmbark}/info`)
			const dados = data[0].name
			setDistrict(dados);
		}
		DistrictEmbark();
		async function DistrictDisembark(){
			//buscar nome do desembarque
			const idDisembarkDistrict = await AsyncStorage.getItem('@juntouApp:idDisembarkDistrict')
			const {data} = await axios.get(url+`/bairro/${idDisembarkDistrict}/info`);
			const dados = data[0].name;
			setDistrictDisembark(dados);
		}
		DistrictDisembark();
		async function PointEmbark(){
			//Buscar nome do ponto de embarque
			const idPointEmbark = await AsyncStorage.getItem('@juntouApp:idPointEmbark')
			const {data} = await axios.get(url+`/point/${idPointEmbark}/info`)
			
			const dados = data[0].name
			setPointEmbark(dados);
		}
		PointEmbark();

		async function PointDisembark(){
			//Buscar nome do ponto de desembarque
			const idPointDisembark = await AsyncStorage.getItem('@juntouApp:idPointDisembark')
			const {data} = await axios.get(url+`/point/${idPointDisembark}/info`)
			
			const dados = data[0].name
			setPointDisembark(dados);
		}
		PointDisembark();

		async function Hours(){
			const idDistrictEmbark = await AsyncStorage.getItem('@juntouApp:idDistrictEmbark')

			const idPointEmbark = await AsyncStorage.getItem('@juntouApp:idPointEmbark')
			const idDisembarkDistrict = await AsyncStorage.getItem('@juntouApp:idDisembarkDistrict')
			const idPointDisembark = await AsyncStorage.getItem('@juntouApp:idPointDisembark')
			const {data} = await axios.get(url+`/trip/${idDistrictEmbark}/${idDisembarkDistrict}/list
			`);
      console.log('-------------------Viagens---------------------------')
      console.log(data);
      setHours(data);

		}
    Hours();
		
	}, [])

	

	

	
  return (
    <View style={styles.container}>

      <View style={styles.valueView}>
        <Text style={styles.value}>R$5,00</Text>
      </View>

      <View style={styles.box}>
        <View style={styles.containerItem}>
          <View style={styles.item}>
            <View style={styles.point} />
            <Text style={styles.itemText}>{district}</Text>
          </View>

          <View style={styles.item}>
            <View style={styles.point} />
            <Text style={styles.itemText}>{districtDisembark}</Text>
          </View>

          <View>
            <CheckBox
              title={pointEmbark}
              checked={checked}
              onPress={() => setChecked(!checked)}
              checkedColor={color.button}
              containerStyle={{
                backgroundColor: "#fff",
                borderColor: "transparent",
              }}
            />
            <CheckBox
              title={pointDisembark}
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

      {hours.map((item)=>(
        <TouchableOpacity key={item.id}>
        <View style={styles.buttonHour}>
          <Text style={styles.buttonHourText}>{item.time}</Text>
        </View>
        </TouchableOpacity>
      ))}

       

     
      </View>
	  <TimePicker/>

	  
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
