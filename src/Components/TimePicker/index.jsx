import React, { useState,useContext } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View,TouchableOpacity } from "react-native";
import styles from './styles';
import api from '../../api';
import AsyncStorage from '@react-native-community/async-storage';
import AuthContext, { AuthProvider } from '../../context/auth';


const TimePicker = ({horasEx,dataTrip,navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [aviso,setAviso] = useState('');
  const [hours,setHours] = useState('');
  const [selected,setSelected] = useState('');
  const { signed, user, signIn, loading } = useContext(AuthContext);


  async function createTrip(horas){

	if(selected){

		const idDistrictEmbark = await AsyncStorage.getItem('@juntouApp:idDistrictEmbark');
		const idDisembarkDistrict = await AsyncStorage.getItem('@juntouApp:idDisembarkDistrict');
		const idPointEmbark = await AsyncStorage.getItem('@juntouApp:idPointEmbark');
		const idPointDisembark = await AsyncStorage.getItem('@juntouApp:idPointDisembark');


	
	
		try{
			console.log(user.id)
			
		
		const {data} = await api.post(`/trip/${idDistrictEmbark}/${idPointEmbark}/${idDisembarkDistrict}/${idPointDisembark}/${user.id}/create`,{
			"time":horas
		});
		console.log(data)
		if(data=='Viagem já existe'){
		setAviso(data);

		
	}else{
		setModalVisible(false)
		navigation.navigate('CreateAwaiting');
	}
		
	}catch(erro){
		console.log(erro)
	}

	}else{
		setAviso('Selecione um horário');

		setInterval(() => {
		setAviso('');
			
		}, 2000);
	}
	

}
function confirmTrip(time){
	setSelected(time);

}


  const horas = ['11:00','14:00','13:00','20:00'];
 

  
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
			<Text style={{fontSize:20,color:"red"}}>{aviso}</Text>

		  {horas.map((item)=>(

			  <TouchableOpacity key={item} onPress={()=>{confirmTrip(item)}} style={styles.hours}>
            		<Text  style={[selected==item?styles.modalTextSelected:styles.modalText]}>{item}</Text>

			  </TouchableOpacity>
					
					))}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => createTrip(selected) }
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
     
     

		
    </View>

	// modal para confirmar as horas 

	
  );
};



export default TimePicker;