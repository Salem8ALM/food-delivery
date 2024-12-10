import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
// import restaurants from "../data/Restaurants";
import RestaurantList from "../components/RestaurantsList";
import ViewCategories from "./ViewCategories";
import { getAllRestaurants } from "../api/restaurants";
import { useQuery } from "@tanstack/react-query";
const ViewResturants = () => {
  const {
    data: restaurants,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["restaurants"],
    queryFn: getAllRestaurants,
  });
  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ViewCategories />
      <RestaurantList restaurants={restaurants} />
    </SafeAreaView>
  );
};

export default ViewResturants;
