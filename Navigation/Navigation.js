import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Search from "../Components/Search";
import FilmDetail from "../Components/FilmDetail";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} options={{ title: 'Rechercher' }}/>
      <Stack.Screen name="FilmDetail" component={FilmDetail} options={{ title: 'Film Détails' }}/>
    </Stack.Navigator>
  );
}