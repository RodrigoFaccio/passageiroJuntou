import React,{useContext} from 'react';
import { View } from 'react-native';
import AuthContext from '../context/auth'
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

// import { Container } from './styles';

const Routes = () => {

  const {signed}=useContext(AuthContext);
  return signed? <AppRoutes/>:<AuthRoutes/>;
}

export default Routes;