import React from "react";
import { StyleSheet, View, Text } from "react-native";
import restaurants from "../data/Restaurants";
import MenuCard from "./MenuCard";

const MenuList = ({route}) => {
  // Select a specific restaurant (hardcoded)
  // const selectedRestaurant = restaurants[0]; // Change index to select other restaurants
const { restaurant } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{restaurant.name} Menu</Text>
      {restaurant.menuItems.map((menuItem) => (
        <MenuCard key={menuItem.id} menuItem={menuItem} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
});

export default MenuList;
