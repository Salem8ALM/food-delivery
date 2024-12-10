import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./src/navigation/authNav/AuthNavigation";
import BottomTab from "./src/navigation/bottomTab/BottomTab";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserContext from "./src/context/UserContext";
import { useState } from "react";

const queryClient = new QueryClient();

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          {user ? <BottomTab /> : <AuthNavigation />}
        </NavigationContainer>
      </QueryClientProvider>
    </UserContext.Provider>
  );
}
