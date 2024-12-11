import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator, createNavtiveStackNavigator} from "@react-navigation/native-stack"
import Login from '../../components/Login';
import Signup from '../../components/Signup';

const Stack= createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#191414',
        },
        headerTintColor: 'green',
        headerTitleStyle: {
          color: 'green',
        },
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: "",
          headerLeft: () => (
            <Text style={{ 
              color: 'green', 
              fontSize: 20, 
              fontWeight: 'bold',
              marginLeft: 15 
            }}>
              Nutrients.
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          title: "",
          headerLeft: () => (
            <Text style={{ 
              color: 'green', 
              fontSize: 20, 
              fontWeight: 'bold',
              marginLeft: 15 
            }}>
              Nutrients.
            </Text>
          ),
        }}
      />
    </Stack.Navigator>
  )
}

export default AuthNavigation

const styles = StyleSheet.create({})