import React, { useState,useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Modal,
  Pressable,
  Alert
} from "react-native";
import { CheckBox } from "react-native-elements";
import Header from "../../Components/HeaderPadrao";
import styles from "./styles";
import { color, textos } from "../../constants";
import AsyncStorage from '@react-native-community/async-storage';
import TimePicker from '../../Components/TimePicker'
import api from '../../api';
import { ScrollView } from "react-native-gesture-handler";
import { widthPercentageToDP } from "react-native-responsive-screen";
import ConfirmTrip from '../../Components/ConfirmTrip'




const SelectHour = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [idTrip,setIdTrip] = useState();


  // dados das viagens 
  const [district,setDistrict] = useState();
  const [districtDisembark,setDistrictDisembark] = useState();
  const [pointEmbark,setPointEmbark] = useState();
  const [pointDisembark,setPointDisembark] = useState();
  const [hours,setHours] = useState([]);
  const [hoursTrip,setHoursTrip] = useState('')
  const[detalhes,setDetalhes] = useState({})
  
  var details = new Object();
  const dataTrip = [district,pointEmbark,districtDisembark,pointDisembark];

  // horario
  const [selectedHours, setSelectedHours] = useState(0);
  const [selectedMinutes, setSelectedMinutes] = useState(0);
  const[warning,setWarning] =useState();


  

  const url='http://192.168.0.125:3005';

	useEffect(() => {
		//Buscar Nome do bairro
		async function DistrictEmbark(){
			const idDistrictEmbark = await AsyncStorage.getItem('@juntouApp:idDistrictEmbark')
			const {data} = await api.get(`/bairro/${idDistrictEmbark}/info`)
			const dados = data[0].name
			setDistrict(dados);
		}
		DistrictEmbark();
		async function DistrictDisembark(){
			//buscar nome do desembarque
			const idDisembarkDistrict = await AsyncStorage.getItem('@juntouApp:idDisembarkDistrict')
			const {data} = await api.get(`/bairro/${idDisembarkDistrict}/info`);
			const dados = data[0].name;
			setDistrictDisembark(dados);
		}
		DistrictDisembark();
		async function PointEmbark(){
			//Buscar nome do ponto de embarque
			const idPointEmbark = await AsyncStorage.getItem('@juntouApp:idPointEmbark')
			const {data} = await api.get(`/point/${idPointEmbark}/info`)
			
			const dados = data[0].name
			setPointEmbark(dados);
		}
		PointEmbark();

		async function PointDisembark(){
			//Buscar nome do ponto de desembarque
			const idPointDisembark = await AsyncStorage.getItem('@juntouApp:idPointDisembark')
			const {data} = await api.get(`/point/${idPointDisembark}/info`)
			
			const dados = data[0].name
			setPointDisembark(dados);
		}
		PointDisembark();

		async function Hours(){
			const idDistrictEmbark = await AsyncStorage.getItem('@juntouApp:idDistrictEmbark');
			const idPointEmbark = await AsyncStorage.getItem('@juntouApp:idPointEmbark')
			const idDisembarkDistrict = await AsyncStorage.getItem('@juntouApp:idDisembarkDistrict')
			const idPointDisembark = await AsyncStorage.getItem('@juntouApp:idPointDisembark')
			const {data} = await api.get(`/trip/${idDistrictEmbark}/${idDisembarkDistrict}/list`);
			console.log('-------------------Viagens---------------------------')
			setHours(data);

			

		}
    Hours();

	

	
	console.log(details)
		
	}, [])
		async function addTrip(hora,idTrip){
			setHoursTrip(hora);
			setIdTrip(idTrip);
			details.hours= hora;
			details.district=district;
			details.districtDisembark = districtDisembark;
			details.pointEmbark = pointEmbark;
			details.pointDisembark = pointDisembark;
			setModalVisible(true);
			setDetalhes(details);

			
			
		}
		async function confirmAddTrip(){

			if(hoursTrip){
				const idDistrictEmbark = await AsyncStorage.getItem('@juntouApp:idDistrictEmbark');
				const idDisembarkDistrict = await AsyncStorage.getItem('@juntouApp:idDisembarkDistrict');
				const idPointEmbark = await AsyncStorage.getItem('@juntouApp:idPointEmbark');
				const idPointDisembark = await AsyncStorage.getItem('@juntouApp:idPointDisembark');
				
	
	
	
				const {data} = await api.post(`/trip/${idDistrictEmbark}/${idPointEmbark}/${idDisembarkDistrict}/${idPointDisembark}/1/createExist`,{
					"time":hoursTrip
				});
				console.log(data);
				setModalVisible(false);
	
				navigation.navigate("CreateAwaiting");
	
				 await AsyncStorage.setItem('@juntouApp:idTrip',JSON.stringify(idTrip));
			}else{
				setWarning('Horário nao selecionando');
				setInterval(() => {
					setWarning('');
				}, 2000);
			}
			

		}
		const [hoursSelected,setHoursSelected] = useState(1)

		function handleSelected(id,hoursTrip){
			setHoursSelected(id);
			console.log(hoursTrip);
			setHoursTrip(hoursTrip)

		
			

		}
	

	

	
  return (
    <View style={styles.container}>

      <View style={styles.valueView}>
        <Text style={styles.value}>R$5,00</Text>
      </View>
	  <Text style={{alignItems:"center",fontSize:20,color:'red'}}>{warning}</Text>
	  

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
	  <ScrollView style={ styles.scrollviewhour}>
	
	  
      {hours.map((item)=>(
        	<TouchableOpacity onPress={()=>handleSelected(item.id,item.time)} key={item.id}>
        		<View style={[hoursSelected==item.id?styles.buttonHourSelected:styles.buttonHour]}>
          			<Text style={styles.buttonHourText}>{item.time}</Text>
        		</View>
        	</TouchableOpacity>
      ))}
		   </ScrollView>

       

     
	  <TimePicker horasEx={hours} navigation={navigation}/>

	  
      <View style={styles.viewButtonConfirm}>
	 
        <TouchableOpacity
          style={styles.button}
          onPress={() => confirmAddTrip()}
        >
          <Text style={styles.TextButton}>{textos.confirmarvaga}</Text>
        </TouchableOpacity>
      </View>

	  
	  

	  
    </View>

	
  );
};

export default SelectHour;
