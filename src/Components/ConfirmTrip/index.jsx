import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View,TouchableOpacity } from "react-native";
import styles from './styles';
import { CheckBox } from "react-native-elements";
import color from '../../constants/colors'

import AsyncStorage from '@react-native-community/async-storage';


const ConfirmTrip = ({details,visible}) => {
	console.log(visible);

	const [modalVisible,setModalVisible] = useState(true);
	const [checked,setChecked] = useState(false)
	async function confirmAddTrip(){
		// const idDistrictEmbark = await AsyncStorage.getItem('@juntouApp:idDistrictEmbark');
		// const idDisembarkDistrict = await AsyncStorage.getItem('@juntouApp:idDisembarkDistrict');
		// const idPointEmbark = await AsyncStorage.getItem('@juntouApp:idPointEmbark');
		// const idPointDisembark = await AsyncStorage.getItem('@juntouApp:idPointDisembark');
		



		// const {data} = await api.post(`/trip/${idDistrictEmbark}/${idPointEmbark}/${idDisembarkDistrict}/${idPointDisembark}/1/createExist`,{
		// 	"time":hoursTrip
		// });
		// console.log(data);
		setModalVisible(false);

		//navigation.navigate("CreateAwaiting");

	 //await AsyncStorage.setItem('@juntouApp:idTrip',JSON.stringify(idTrip));

	}

	return(
		<View></View>
	);
	
};



export default ConfirmTrip;