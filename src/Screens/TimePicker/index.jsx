import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View,TouchableOpacity } from "react-native";
import styles from './styles';
import api from '../../api';
import AsyncStorage from '@react-native-community/async-storage';


const TimePicker = ({horasEx,dataTrip}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [aviso,setAviso] = useState('');

  async function createTrip(horas){
	const idDistrictEmbark = await AsyncStorage.getItem('@juntouApp:idDistrictEmbark');
	const idDisembarkDistrict = await AsyncStorage.getItem('@juntouApp:idDisembarkDistrict');
	const idPointEmbark = await AsyncStorage.getItem('@juntouApp:idPointEmbark');
	const idPointDisembark = await AsyncStorage.getItem('@juntouApp:idPointDisembark')



	const {data} = await api.post(`/trip/${idDistrictEmbark}/${idPointEmbark}/${idDisembarkDistrict}/${idPointDisembark}/1/create`,{
		"time":horas
	});
	console.log(data);
	if(data=='viagem já existe'){
		setAviso(data);

		setInterval(() => {
		setAviso('');
			
		}, 2000);
	}

}


  const horas = ['11:00','14:00','13:00','20:00'];
 

  
  return (
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
			<Text style={{fontSize:20,color:"red"}}>{aviso}</Text>

		  {horas.map((item)=>(

			  <TouchableOpacity key={item} onPress={()=>{createTrip(item)}} style={styles.hours}>
            		<Text  style={styles.modalText}>{item}</Text>

			  </TouchableOpacity>
					
					))}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >

				
              <Text style={styles.textStyle}>confirmar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
	  <TouchableOpacity  onPress={() => setModalVisible(true)}  style={styles.plusView}>
        <View>
          <Text style={styles.plusText}>+</Text>
        </View>
      </TouchableOpacity>
     
     
        <Text style={styles.textStyle}>+</Text>
    </View>
  );
};



export default TimePicker;