import React, { useState } from 'react';
// import { View, Text } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./pages/HomeScreen"

const Stack = createNativeStackNavigator();

function App() {
  return (
    
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;