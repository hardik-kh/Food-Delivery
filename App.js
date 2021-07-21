import React from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'
import { Home,Restaurant, OrderDelivery,Area } from './screens'
import Tabs from './navigation/tabs';

const Stack = createStackNavigator();
console.disableYellowBox = true;
const App = () => {
  return (
      
      <NavigationContainer>
          <StatusBar barStyle='light-content'/>
          <Stack.Navigator
              screenOptions={{
                  headerShown: false
              }}
              initialRouteName={'Area'}
          >
              <Stack.Screen name="Area" component={Area} />
              <Stack.Screen name="Home" component={Tabs} />
              <Stack.Screen name="Restaurant" component={Restaurant} />
              <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
          </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App;