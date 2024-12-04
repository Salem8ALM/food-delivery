import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ restaurants }) => {
  
  return (
    <ScrollView style={styles.container}>
      {restaurants.map((restaurant) => (
        <View key={restaurant.id} style={styles.cardContainer}>
          <RestaurantCard restaurant={restaurant} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  cardContainer: {
    marginBottom: 10, 
  },
});

export default RestaurantList;
