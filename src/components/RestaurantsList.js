import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import RestaurantCard from "./RestaurantCard";

const RestaurantsList = ({ restaurants }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => (
          <View key={item._id} style={styles.cardContainer}>
            <RestaurantCard restaurant={item} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191414', // Dark grey background
  },
  cardContainer: {
    marginBottom: 10,
  },
});

export default RestaurantsList;
