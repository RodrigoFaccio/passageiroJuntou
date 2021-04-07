import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import {
  Login,
  Register,
  Home,
  Profile,
  SelectHour,
  CreateGroupe,
  CreateAwaiting,
  Confirmed,
  Finished,
  
  
} from "../src/Screens";

import Embark from '../src/Screens/Embark';
import SearchList from '../src/Screens/Search';


export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}
const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="SelectHour" component={SelectHour} />
      <Stack.Screen name="CreateGroupe" component={CreateGroupe} />
      <Stack.Screen name="CreateAwaiting" component={CreateAwaiting} />
      <Stack.Screen name="Confirmed" component={Confirmed} />
      <Stack.Screen name="Finished" component={Finished} />
      <Stack.Screen name="Embark" component={Embark} />
      <Stack.Screen name="SearchList" component={SearchList} />
      




    </Stack.Navigator>
  );
}
