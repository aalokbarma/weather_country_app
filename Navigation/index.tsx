import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import CountryScreen from '../Screens/CountryScreen';
import CapitalWeather from '../Screens/CapitalWeather';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return(
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Country" component={CountryScreen} />
          <Stack.Screen name="CapitalWeather" component={CapitalWeather} />
        </Stack.Group>
      </Stack.Navigator>
  )
}
export default Navigation;