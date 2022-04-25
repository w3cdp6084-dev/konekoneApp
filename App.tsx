import React, { useState } from 'react';
// import { View, Text } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./pages/HomeScreen";
import AboutScreen from "./pages/AboutScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator initialRouteName='About'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;