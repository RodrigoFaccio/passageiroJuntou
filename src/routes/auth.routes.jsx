import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { color } from "../constants/colors";


import Login from '../Screens/Login';

const Auth = createStackNavigator();

const AuthRoutes = ()=>{
    return(
        <Auth.Navigator 
        barStyle={{
            backgroundColor: color.button,
          }}>
            <Auth.Screen name="Login" component={Login}/>
        </Auth.Navigator>
    );
}

export default AuthRoutes;