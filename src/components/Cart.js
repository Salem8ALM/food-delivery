import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import restaurants from "../data/Restaurants";

const Cart = ({route}) => {
  // const menuItem1 = restaurants[0].menuItems[0];
  // const menuItem2 = restaurants[0].menuItems[1];
  
const {menuItem} = route.params;


  return (
    <View>

      <View style={styles.card}>

        <Image source={{ uri: menuItem.image }} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{menuItem.name}</Text>
          <Text style={styles.category}>${menuItem.price.toFixed(2)}</Text>
          <Text style={styles.details}>{menuItem.description}</Text>
        </View>
  

      </View>
<View style = {styles.card}>

<Text style={styles.category}> Total Cost:  ${menuItem.price.toFixed(2)}</Text>
<Text style= {styles.category}>{"                              "}Quantity: 1</Text>

</View>


      </View>
     
  );
};

export default Cart;

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
