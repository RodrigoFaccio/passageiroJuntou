import React, { useState,useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Modal,
  Pressable
} from "react-native";
import { CheckBox } from "react-native-elements";
import Header from "../../Components/HeaderPadrao";
import styles from "./styles";
import { color, textos } from "../../constants";
import AsyncStorage from '@react-native-community/async-storage';
import TimePicker from '../TimePicker'
import api from '../../api';
import { ScrollView } from "react-native-gesture-handler";
import { widthPercentageToDP } from "react-native-responsive-screen";



const SelectHour = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);


  // dados das viagens 
  const [district,setDistrict] = useState();
  const [districtDisembark,setDistrictDisembark] = useState();
  const [pointEmbark,setPointEmbark] = useState();
  const [pointDisembark,setPointDisembark] = useState();
  const [hours,setHours] = useState([]);
  const [hoursTrip,setHoursTrip] = useState('')

  const dataTrip = [district,pointEmbark,districtDisembark,pointDisembark];

  // horario
  const [selectedHours, setSelectedHours] = useState(0);
  const [selectedMinutes, setSelectedMinutes] = useState(0);


  

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
			const idDistrictEmbark = await AsyncStorage.getItem('@juntouApp:idDistrictEmbark')

			const idPointEmbark = await AsyncStorage.getItem('@juntouApp:idPointEmbark')
			const idDisembarkDistrict = await AsyncStorage.getItem('@juntouApp:idDisembarkDistrict')
			const idPointDisembark = await AsyncStorage.getItem('@juntouApp:idPointDisembark')
			const {data} = await api.get(`/trip/${idDistrictEmbark}/${idDisembarkDistrict}/list
			`);
      console.log('-------------------Viagens---------------------------')
      setHours(data);

		}
    Hours();
		
	}, [])
		async function addTrip(hora){
			setHoursTrip(hora);
			setModalVisible(true);
			
		}
		async function confirmAddTrip(){
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

		}
	

	

	
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
	  <ScrollView style={ styles.scrollviewhour}>

      {hours.map((item)=>(
        	<TouchableOpacity onPress={()=>addTrip(item.time)} key={item.id}>
        		<View style={styles.buttonHour}>
          			<Text style={styles.buttonHourText}>{item.time}</Text>
        		</View>
        	</TouchableOpacity>
      ))}
		   </ScrollView>

       

     
	  <TimePicker horasEx={hours}/>

	  
      <View style={styles.viewButtonConfirm}>
	 
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("CreateGroupe")}
        >
          <Text style={styles.TextButton}>{textos.confirmarvaga}</Text>
        </TouchableOpacity>
      </View>


	  <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
		  <View style={styles.valueView}>
        	<Text style={styles.value}>{hoursTrip}</Text>
      	  </View>


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
		 
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => confirmAddTrip()}
            >

				
              <Text style={styles.textStyle}>confirmar viagem</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
	 
     
     
    </View>
    </View>

	
  );
};

export default SelectHour;
