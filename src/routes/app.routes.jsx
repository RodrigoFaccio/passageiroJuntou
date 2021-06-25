import React,{useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../Screens/Home';
import Embark from '../Screens/Embark';
import DisembarkDistrict from '../Screens/DisembarkDistrict';
import SelectHour from '../Screens/SelectHour';
import DisembarkPoint from '../Screens/DisembarkPoint';
import CreateAwaiting from '../Screens/CreateAwaiting';
import Confirmed from '../Screens/Confirmed';
import AuthContext, { AuthProvider } from '../context/auth';




import { color } from "../constants/colors";
import { View,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';





const App = createStackNavigator();


const AppRoutes = ()=>{
const { signed, user,signIn,signOut } = useContext(AuthContext);
const LogoLeft = ()=>(
    <View>
        <Image style={{width:40,height:40, marginLeft:10}} source={require('../Assets/perfil.png')} />
    </View>
);
const LogoRight = ()=>(
    <View>
        <Image style={{width:40,height:40,marginRight:10}} source={require('../Assets/whats.png')} />
    </View>
);
const LogoLeftE = ()=>(
    <View>
        <Image style={{width:40,height:40, marginLeft:10}} source={require('../Assets/cancel.png')} />
    </View>
);
const LogoRightE = ()=>(
	<TouchableOpacity onPress={()=>{signOut()}}>
		<View>
			<Image style={{width:40,height:40,marginRight:10}} source={require('../Assets/whats.png')} />

		</View>
	</TouchableOpacity>
);


    return (
        <App.Navigator
        screenOptions={{
            title:'',
            headerStyle:{
                backgroundColor:color.button
            }
        }}
          >
            <App.Screen name="Home" component={Home} 
           options={({ navigation }) => ({
            title:'Bairro de embarque',
                headerTitleAlign:'center',
                headerTitleStyle:{
                    color:'white',
                    
                    
                },
            headerLeft: () => (
              <LogoLeft  />
            ),
            headerRight: () => (
                <LogoRight  />
				
              ),
          })}
            />
            <App.Screen name="Embark" component={Embark}options={{title:'Embarque'}}
            options={({ navigation }) => ({
                title:'Ponto de embarque',
                    headerTitleAlign:'center',
                    headerTitleStyle:{
                        color:'white',
                        
                        
                    },
                headerLeft: () => (
                  <LogoLeftE  />
                ),
                headerRight: () => (
                    <LogoRightE  />
                  ),
              })}
            />
			 <App.Screen name="DisembarkDistrict" component={DisembarkDistrict}options={{title:'Embarque'}}
            options={({ navigation }) => ({
                title:'Bairro de desembarque',
                    headerTitleAlign:'center',
                    headerTitleStyle:{
                        color:'white',
                        
                        
                    },
                headerLeft: () => (
                  <LogoLeftE  />
                ),
                headerRight: () => (
                    <LogoRightE  />
                  ),
              })}
            />
			 <App.Screen name="SelectHour" component={SelectHour}options={{title:'Embarque'}}
            options={({ navigation }) => ({
                title:'Horário',
                    headerTitleAlign:'center',
                    headerTitleStyle:{
                        color:'white',
                        
                        
                    },
                headerLeft: () => (
                  <LogoLeftE  />
                ),
                headerRight: () => (
                    <LogoRightE  />
                  ),
              })}
            />
			<App.Screen name="DisembarkPoint" component={DisembarkPoint}options={{title:'Embarque'}}
            options={({ navigation }) => ({
                title:'Ponto do desembarque',
                    headerTitleAlign:'center',
                    headerTitleStyle:{
                        color:'white',
                        
                        
                    },
                headerLeft: () => (
                  <LogoLeftE  />
                ),
                headerRight: () => (
                    <LogoRightE  />
                  ),
              })}
            />

<App.Screen name="CreateAwaiting" component={CreateAwaiting}options={{title:'Juntando'}}
            options={({ navigation }) => ({
                title:'Ponto do desembarque',
                    headerTitleAlign:'center',
                    headerTitleStyle:{
                        color:'white',
                        
                        
                    },
                headerLeft: () => (
                  <LogoLeftE  />
                ),
                headerRight: () => (
                    <LogoRightE  />
                  ),
              })}
            />
			

			<App.Screen name="Confirmed" component={Confirmed}options={{title:'Juntando'}}
            options={({ navigation }) => ({
                title:'Ponto do desembarque',
                    headerTitleAlign:'center',
                    headerTitleStyle:{
                        color:'white',
                        
                        
                    },
                headerLeft: () => (
                  <LogoLeftE  />
                ),
                headerRight: () => (
                    <LogoRightE  />
                  ),
              })}
            />
			
            </App.Navigator>



    
    );
}

export default AppRoutes;