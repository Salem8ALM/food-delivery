import axios from "axios";
import * as SecureStore from 'expo-secure-store';

const instance = axios.create({
  baseURL: "https://react-native-food-delivery-be.eapi.joincoded.com/api",
});

// Function to get token from SecureStore
const getToken = async () => {
  try {
    return await SecureStore.getItemAsync('userToken');
  } catch (error) {
    console.error('Error getting token:', error);
    return null;
  }
};

// Add request interceptor
instance.interceptors.request.use(async (config) => {
  const token = await getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
