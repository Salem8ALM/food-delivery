import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen";
import Cart from "../../components/Cart";
import DetailCard from "../../components/DetailCard";
import MenuList from "../../components/MenuList";
import { TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const CartButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Cart")}
      style={{ marginRight: 15 }}
    >
      <AntDesign name="shoppingcart" size={24} color="green" />
    </TouchableOpacity>
  );
};

const HomeNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#191414',
        },
        headerTintColor: 'green',
        headerTitleStyle: {
          color: 'green',
        },
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "",
          headerLeft: () => (
            <Text style={{ 
              color: 'green', 
              fontSize: 20, 
              fontWeight: 'bold',
              marginLeft: 15 
            }}>
              Nutrients.
            </Text>
          ),
          headerRight: () => <CartButton />,
        }}
      />
      <Stack.Screen name="MenuList" component={MenuList} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Detail" component={DetailCard} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
const styles = StyleSheet.create({});
