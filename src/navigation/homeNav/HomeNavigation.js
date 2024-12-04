import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ViewResturants from "../../screens/ViewRestaurants";
import Cart from "../../components/Cart";
import DetailCard from "../../components/DetailCard";
import MenuList from "../../components/MenuList";

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ViewResturants" component={ViewResturants} />
      <Stack.Screen name="MenuList" component={MenuList} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Detail" component={DetailCard} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;

const styles = StyleSheet.create({});
