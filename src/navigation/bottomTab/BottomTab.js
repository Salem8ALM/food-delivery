import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigation from "../homeNav/HomeNavigation";
import AuthNavigation from "../authNav/AuthNavigation";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "blue"

    }}>
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen name="auth" component={AuthNavigation} options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="profile" size={24} color="black" />
          ),
        }}/>
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
