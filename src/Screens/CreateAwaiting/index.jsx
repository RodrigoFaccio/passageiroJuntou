import React, { useState,useContext } from "react";
import {
  View,
  Text,
  StatusBar,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import Header from "../../Components/HeaderPadrao";
import styles from "./styles";
import { color, textos } from "../../constants";
import AuthContext, { AuthProvider } from '../../context/auth';
import api from '../../api'
import { useEffect } from "react";

const CreateAwaiting = ({ navigation,route }) => {
const { signed, user,signIn,signOut } = useContext(AuthContext);

const [trip,setTrip] = useState(route.params)

useEffect(()=>{

	async function checkTrip(){
		console.log('---------')

		const response = await api.get(`/trip/${user.id}/checkTripUser`);
		//console.log(response)


		const {data} = response;

		const idTrip = data.id_trip
	
	
	
		if(data){
			const {data} = await api.get(`/trip/${idTrip}/checkTripStatus`);
			const dados = data
			//console.log(data.status);

			if(data.status==1){
				navigation.navigate('Confirmed',dados)

			}else{
				navigation.navigate('CreateAwaiting',dados)

			}
	
		}else{
	
		}
	
		
	
	}
	checkTrip();
},[])
	async function cancelTrip(){
		console.log('-----====')
		console.log(trip)


		const {data}= await api.get(`/trip/${!trip.id?trip.id:trip.id_trip}/${user.id}/cancel`)
		console.log(data)

		if(data=="Cancelada com sucesso")
			return navigation.navigate('Home')
	}
  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.title}>{textos.quase}</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.desc}>{textos.quaseMessage}</Text>
      </View>

      <View style={styles.viewButtonConfirm}>
        <TouchableOpacity
          style={styles.button}
          onPress={cancelTrip}
        >
          <Text style={styles.TextButton}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateAwaiting;
