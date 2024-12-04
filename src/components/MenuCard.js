import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MenuCard = ({ menuItem }) => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: menuItem.image }}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Detail",{menuItem})}>
        <Text style={styles.name}>{menuItem.name}</Text>
        <Text style={styles.category}>${menuItem.price.toFixed(2)}</Text>
        <Text style={styles.details}>{menuItem.description}</Text>
        </TouchableOpacity>
 
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Cart', {menuItem})}>
        <Text>CART PLUS LOGO</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  category: {
    fontSize: 14,
    color: "#888",
  },
  details: {
    fontSize: 12,
    color: "#666",
  },
});
