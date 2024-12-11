import { useNavigation } from "@react-navigation/native";
import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { login } from "../api/auth";
import UserContext from "../context/UserContext";
import { AntDesign } from "@expo/vector-icons";

const Login = () => {
  const navigation = useNavigation();
  const { setUser } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const response = await login(userInfo);
      setUser(response); // Store user data in context
    } catch (error) {
      Alert.alert(
        "Login Failed", 
        error.response?.data?.message || "Something went wrong"
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Nutrients.</Text>
      
      <View style={styles.inputContainer}>
        <AntDesign name="user" size={20} color="green" style={styles.icon} />
        <TextInput 
          style={styles.input} 
          placeholder="Username"
          placeholderTextColor="#B3B3B3"
          value={userInfo.username}
          onChangeText={(text) => setUserInfo({...userInfo, username: text})}
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <AntDesign name="lock" size={20} color="green" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#B3B3B3"
          value={userInfo.password}
          onChangeText={(text) => setUserInfo({...userInfo, password: text})}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.registerLink} 
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.registerText}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#191414",
    padding: 20,
  },
  logo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "green",
    marginBottom: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: "100%",
    height: 50,
    backgroundColor: "#282828",
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 16,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "green",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  registerLink: {
    marginTop: 20,
  },
  registerText: {
    color: "#B3B3B3",
    fontSize: 14,
  },
});

export default Login;
