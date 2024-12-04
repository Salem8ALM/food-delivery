import {  SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import restaurants from "../data/Restaurants";
import RestaurantList from "../components/RestaurantsList";

const ViewResturants = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        
      }}
    >
      <RestaurantList restaurants={restaurants} />
    </SafeAreaView>
  );
};

export default ViewResturants;
