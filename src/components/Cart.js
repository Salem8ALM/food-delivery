import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const Cart = ({ route }) => {
  // Initialize cartItems with the first item from route params
  const [cartItems, setCartItems] = useState([
    { ...route.params.menuItem, quantity: 1 }
  ]);

  const addItem = (item) => {
    setCartItems(prev => {
      const existingItem = prev.find(i => i._id === item._id);
      if (existingItem) {
        return prev.map(i => 
          i._id === item._id 
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      navigation.navigate('HomeScreen');
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeItem = (itemId) => {
    setCartItems(prev => prev.filter(item => item._id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      removeItem(itemId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item._id === itemId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  if (cartItems.length === 0) {
    return (
      <View style={styles.emptyCart}>
        <Text style={styles.emptyCartText}>Your cart is empty</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.itemsContainer}>
        {cartItems.map(item => (
          <View key={item._id} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>${item.price.toFixed(2)}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity 
                  onPress={() => updateQuantity(item._id, item.quantity - 1)}
                  style={styles.quantityButton}
                >
                  <AntDesign name="minuscircleo" size={24} color="white" />
                </TouchableOpacity>
                
                <Text style={styles.quantity}>{item.quantity}</Text>
                
                <TouchableOpacity 
                  onPress={() => updateQuantity(item._id, item.quantity + 1)}
                  style={styles.quantityButton}
                >
                  <AntDesign name="pluscircleo" size={24} color="white" />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity 
              onPress={() => removeItem(item._id)}
              style={styles.removeButton}
            >
              <AntDesign name="delete" size={24} color="red" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Cost: ${getTotalPrice().toFixed(2)}</Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191414', // Dark grey background
  },
  itemsContainer: {
    flex: 1,
    marginBottom: 120, // Space for total container
  },
  card: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    backgroundColor: '#282828', // Dark grey background
    borderRadius: 8,
    shadowColor: '#000',
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
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF', // White text
  },
  price: {
    fontSize: 14,
    color: '#FFFFFF', // White text
    marginVertical: 4,
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#282828', // Dark grey background
    marginTop: 10,
  },
  quantityButton: {
    padding: 10,
  },
  quantity: {
    fontSize: 18,
    marginHorizontal: 20,
    color: '#FFFFFF', // White text
  },
  totalContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: '#282828', // Dark grey background
    borderTopWidth: 1,
    borderTopColor: '#1DB954',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFFFFF', // White text
  },
  checkoutButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF', // White text
  },
  removeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default Cart;
