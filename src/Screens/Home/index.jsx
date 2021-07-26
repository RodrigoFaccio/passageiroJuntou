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
import ListLocale from "../../Components/ListLocale";



const Home = ({ navigation }) => {
	
const { signed, user,signIn,signOut } = useContext(AuthContext);

  const [search, setSearch] = useState('');
  const [checked, setChecked] = useState(false);
  const [data,setData] = useState([]);
  const [dataSearch,setDataSearch] = useState([]);

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
	

    
	async function checkTrip(){
		console.log('---------')

		const response = await api.get(`/trip/${user.id}/checkTripUser`);
		console.log(response.data)


		const {data} = response;

		const idTrip = data.id_trip

	
	
	
		if(data!='Não a usuarios'){
			const {data} = await api.get(`/trip/${idTrip}/checkTripStatus`);
			const dados = data
			console.log(data.status);

			if(data.status==1){
				navigation.navigate('Confirmed',dados)

			}else{
				navigation.navigate('CreateAwaiting',dados)

			}
	
		}else{
			console.log('dasdasdsadasd')
	 		 bairrosRequest();

	
		}
	
		
	
	}
	checkTrip();

	async function Search(search){
      if(search){
		console.log(search)

       const newData = await api.get(`/bairro/${search}/pesquisa`)
		console.log(newData.data)

	   setDataSearch(newData.data)
        
      }else{
        setData([])
      }
    }
    Search(search);
	
async function bairrosRequest(){
		const responseSearch = await api.get(`/bairro/lista`);
		setData(responseSearch.data)


	  }

	function finalLoad(){
		setLoading(false)

	}
	finalLoad();

	
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

		{
			search==''?
			(
				<View>
				{data.map(item=>{
					return(
					<ListLocale key={item.id} item={item}/>
				)})}
				 
			</View>
			):
			( 
				<ScrollView style={styles.search}  >
				<View style={styles.search}>
				  {dataSearch.map((item)=>(
					<SearchList item={item} key={item.id}/>
				  ))}
				</View>
				</ScrollView>)
		}

        

		
		

		
		
       

          
        
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Home;