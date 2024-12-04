import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ViewResturants from "./src/screens/ViewRestaurants";
import ViewCategories from "./src/screens/ViewCategories";
import restaurantCategories from "./src/data/Categories";
import DetailCard from "./src/components/DetailCard";
import Cart from "./src/components/Cart";
import Login from "./src/components/Login";
import Signup from "./src/components/Signup";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./src/navigation/authNav/AuthNavigation";
import HomeNavigation from "./src/navigation/homeNav/HomeNavigation";
import BottomTab from "./src/navigation/bottomTab/BottomTab";

export default function App() {
  return (
    <NavigationContainer
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      {/* <ViewCategories />
      <ViewResturants /> */}
      {/* <ViewMenu /> */}
      {/* <DetailCard /> */}
      {/* <Cart /> */}
      {/* <Login/> */}
      {/* <Signup /> */}
      {/* <AuthNavigation/> */}
      {/* <HomeNavigation/> */}
      <BottomTab/>
    </NavigationContainer>
  );
}
