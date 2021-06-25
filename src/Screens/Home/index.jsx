import React, { useEffect, useState,useContext } from "react";
import {
  View,
  Text,
  StatusBar,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SearchBar, CheckBox } from "react-native-elements";
import Header from "../../Components/HeaderHome";
import styles from "./styles";
import { color, textos } from "../../constants";
import axios from 'axios';
import SearchList from '../Search';
import { ScrollView } from "react-native-gesture-handler";
import AuthContext, { AuthProvider } from '../../context/auth';

	


import AsyncStorage from '@react-native-community/async-storage';


import api   from  '../../api.js';



const Home = ({ navigation }) => {
	
const { signed, user,signIn,signOut } = useContext(AuthContext);

  const [search, setSearch] = useState("");
  const [checked, setChecked] = useState(false);
  const [data,setData] = useState([]);
  const [email,setEmail] = useState([]);
  const [userr,setUserr]=useState();
  const [idTrip,setIdTrip]=useState();

  const [loading,setLoading]=useState(true);

  //console.log(user.email)


  

	function sair(){

		//console.log('ola')
		return signOut();
	}
  useEffect(()=>{
    async function Search(search){
      if(search){
        const response = await api.get(`/bairro/${search}/pesquisa`);
        setData(response.data);
		//console.log(response.data);
      }else{
        setData([])
      }
    }
    Search(search);
	async function checkTrip(){
		//VERIFICAR SE EXISTE UMA VIAGEM 
		const {data} = await api.get(`/trip/${user.id}/checkTripUser`);
		setIdTrip(data);
		

		
		



		if(data!='Não a usuarios'){
		//VERIFICAR O STATUS DA VIAGEM

			const {data} = await api.get(`/trip/${idTrip.id_trip}/checkTripStatus`);
			if(data.status==1){
				navigation.navigate("Confirmed");
				setLoading(false)

			}else{
				navigation.navigate("CreateAwaiting");
				setLoading(false)

			}
			
		}else{
				setLoading(false)

		}
		setLoading(false);

	}
	checkTrip();

	

	
  },[search]);
  

  if(loading){
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size="large" color="#666" />

        </View>
    );
}


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <View>
          <SearchBar
            lightTheme={true}
            placeholder="Pesquise o endereço"
            onChangeText={(search) => setSearch(search)}
            value={search}
            containerStyle={{ backgroundColor: "#fff" }}
            inputContainerStyle={{
              backgroundColor: "#fff",
            }}
          />
        </View>

        <ScrollView style={styles.search}  >
        <View style={styles.search}>
          {data.map((item)=>(
            <SearchList item={item} key={item.id}/>
          ))}
        </View>
        </ScrollView>

		<TouchableOpacity onPress={sair}>
			<Text>Sair</Text>
		</TouchableOpacity>
		

		
		
       

          
        
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Home;
