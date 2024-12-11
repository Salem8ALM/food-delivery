import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { register } from "../api/auth";
import { AntDesign } from "@expo/vector-icons";

const Signup = () => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    image: null,
  });

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status !== "granted") {
      Alert.alert("Permission needed", "Please grant permission to access your photos");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setUserInfo({ ...userInfo, image: result.assets[0].uri });
    }
  };

  const handleSignup = async () => {
    if (!userInfo.username || !userInfo.password || !userInfo.image) {
      Alert.alert("Error", "Please fill in all fields and select an image");
      return;
    }

    try {
      await register(userInfo);
      Alert.alert("Success", "Registration successful", [
        {
          text: "OK",
          onPress: () => navigation.navigate("Login")
        }
      ]);
    } catch (error) {
      Alert.alert(
        "Registration Failed", 
        error.response?.data?.message || "Something went wrong"
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Create Account</Text>

      <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
        {userInfo.image ? (
          <Image source={{ uri: userInfo.image }} style={styles.image} />
        ) : (
          <View style={styles.imagePlaceholder}>
            <AntDesign name="camerao" size={40} color="green" />
            <Text style={styles.imagePlaceholderText}>Add Photo</Text>
          </View>
        )}
      </TouchableOpacity>

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

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.loginLink} 
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.loginText}>Already have an account? Login</Text>
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
    fontSize: 28,
    fontWeight: "bold",
    color: "green",
    marginBottom: 30,
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#282828",
    marginBottom: 30,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "green",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imagePlaceholder: {
    alignItems: 'center',
  },
  imagePlaceholderText: {
    color: "green",
    marginTop: 5,
    fontSize: 14,
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
  loginLink: {
    marginTop: 20,
  },
  loginText: {
    color: "#B3B3B3",
    fontSize: 14,
  },
});

export default Signup;
