import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { CheckBox } from "react-native-elements";
import Header from "../../Components/HeaderConfirmed";
import styles from "./styles";
import { color, textos } from "../../constants";
import { Feather } from "@expo/vector-icons";
import api from "../../api";


const Confirmed = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
  const [userDrive,setUserDrive] = useState();
  const [loading,setLoading]=useState(true);
  const [tripDate,setTripDate] = useState();
  const [district,setDistrict] = useState();
  const [districtDisembark,setDistrictDisembark] = useState();


  useEffect(()=>{
	  async function getInfoDriver(){
			const response = await api.get(`/trip/4/checkTripStatus`);
			setTripDate(response.data)

			const {data} = await api.get(`/motorista/${response.data.id_user}/list`);
			setUserDrive(data);
			console.log(response.data);
			setLoading(false)





			
	  }
	  getInfoDriver();
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

  },[])
  if(loading){
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size="large" color="#666" />

        </View>
    );
}

  return (
    <View style={styles.container}>

      <View style={styles.valueView}>
        <Text style={styles.value}>R$5,00</Text>
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
      </View>

      <View style={styles.box}>
        <View>
          <Text
            style={[
              styles.itemText,
              { textAlign: "center", fontSize: 20, marginTop: 16 },
            ]}
          >
            Ás 11:30 esteja na praça da estação em Honório bicalho.
          </Text>
        </View>
      </View>

      <View style={styles.boxContainer}>
        <View style={styles.viewImage}>
          <Image source={require("../../Assets/avatar.png")} />
        </View>
        <View style={styles.containerItens}>
          <View>
            <TouchableOpacity>
              <Feather name="message-circle" color="gray" size={35} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.itemTextContainer}>{userDrive.name}</Text>
            <Text style={styles.itemTextContainer}>{userDrive.marca_carro}</Text>
            <Text style={styles.itemTextContainer}>{userDrive.placa}</Text>
            <TouchableOpacity>
              <Text style={styles.localizationText}>Localização</Text>
            </TouchableOpacity>
          </View>
          <View>
            <View style={styles.numberView}>
              <Text style={styles.number}>{tripDate.people}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.viewButtonConfirm}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Finished")}
        >
          <Text style={styles.TextButton}>{textos.cancelar}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Confirmed;
