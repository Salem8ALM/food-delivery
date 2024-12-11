import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { getRestaurantItems } from "../api/restaurants";
import MenuCard from "./MenuCard";

const MenuList = ({ route }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { restaurant } = route.params;

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const items = await getRestaurantItems(restaurant._id);
        setMenuItems(items);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, [restaurant._id]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{restaurant.name} Menu</Text>
      {menuItems.map((menuItem) => (
        <MenuCard key={menuItem._id} menuItem={menuItem} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#191414", // Dark grey background
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#FFFFFF", // White text
  },
});

export default MenuList;
