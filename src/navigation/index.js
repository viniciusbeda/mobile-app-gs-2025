import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import EventoListScreen from '../screens/EventoListScreen';
import DetailsScreen from '../screens/DetailsScreen';
import EventoFormScreen from '../screens/EventoFormScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Eventos" component={EventoListScreen} />
      <Stack.Screen name="Detalhes do Evento" component={DetailsScreen} />
      <Stack.Screen name="Novo Evento" component={EventoFormScreen} />
      <Stack.Screen name="Sobre" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
