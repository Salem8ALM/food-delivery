import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const RestaurantCard = ({ restaurant }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("MenuList", { restaurant })}
    >
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{restaurant.name}</Text>
        <Text style={styles.category}>{restaurant.category.name}</Text>
        <Text style={styles.details}>
          {restaurant.rating} | {restaurant.deliveryTime}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginVertical: 10,
    backgroundColor: "#282828",
    borderRadius: 8,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 200,
  },
  infoContainer: {
    padding: 10,
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  category: {
    fontSize: 14,
    color: "#B3B3B3",
  },
  details: {
    fontSize: 12,
    color: "#B3B3B3",
  },
});

export default RestaurantCard;
