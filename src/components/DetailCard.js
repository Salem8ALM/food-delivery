import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const DetailCard = ({ route }) => {
  const navigation = useNavigation();
  const { menuItem } = route.params;
  return (
    <View style={styles.container}>
      <Image source={{ uri: menuItem.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{menuItem.name}</Text>
        <Text style={styles.price}>${menuItem.price.toFixed(2)}</Text>
        <Text style={styles.details}>{menuItem.description}</Text>
        <TouchableOpacity 
          style={styles.addButton} 
          onPress={() => navigation.navigate('Cart', {menuItem})}
        >
          <AntDesign name="plus" size={32} color="green" />
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191414',
  },
  image: {
    width: '100%',
    height: 300,
  },
  infoContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#282828',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },
  price: {
    fontSize: 24,
    color: "green",
    marginBottom: 20,
  },
  details: {
    fontSize: 18,
    color: "#B3B3B3",
    lineHeight: 24,
    marginBottom: 30,
  },
  addButton: {
    flexDirection: 'row',
    backgroundColor: '#282828',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderWidth: 2,
    borderColor: 'green',
  },
  addButtonText: {
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default DetailCard;
