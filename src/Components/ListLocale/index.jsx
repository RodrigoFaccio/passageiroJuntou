import React from 'react';
import { View,StyleSheet,TouchableOpacity,Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';



// import { Container } from './styles';

const ListLocale = ({item}) => {

  const navigation = useNavigation();

	async function saveEmbark(item){
		await AsyncStorage.setItem('@juntouApp:dominante',JSON.stringify(item.dominante))
		await AsyncStorage.setItem('@juntouApp:idDistrictEmbark',JSON.stringify(item.id))
		
		navigation.navigate("Embark");
	  }
  return(
		  <TouchableOpacity onPress={()=>{saveEmbark(item)}}  style={styles.ViewNameEmbarque}>
						
						<Text style={styles.textNameEmbarque}>{item.name}</Text>
					</TouchableOpacity>
  );

}
const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignContent:'center',
		alignItems:'center'
	}, textNameEmbarque:{
	  fontSize:20,
  
	  
	},
	ViewNameEmbarque:{
	  justifyContent:"center",
	  alignItems:"center",
	  padding:20,
	  borderRadius:20,
	  borderWidth:2,
	  width:'90%',
	  marginLeft:"5%"
	  
	}
})

export default ListLocale;


