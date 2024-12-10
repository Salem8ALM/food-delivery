import instance from "./index";
import * as SecureStore from 'expo-secure-store';

const register = async (userInfo) => {
  try {
    const formData = new FormData();
    formData.append('username', userInfo.username);
    formData.append('password', userInfo.password);
    
    if (userInfo.image) {
      const imageUri = userInfo.image;
      const filename = imageUri.split('/').pop();
      const match = /\.(\w+)$/.exec(filename);
      const type = match ? `image/${match[1]}` : 'image';
      
      formData.append('image', {
        uri: imageUri,
        name: filename,
        type,
      });
    }

    const response = await instance.post("/auth/register", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Registration error:', error.response?.data || error.message);
    throw error;
  }
};

const getProfile = async () => {
  try {
    const response = await instance.get("/auth/profile");
    return response.data;
  } catch (error) {
    console.error('Profile fetch error:', error.response?.data || error.message);
    throw error;
  }
};

const login = async (userInfo) => {
  try {
    const response = await instance.post("/auth/login", userInfo);
    
    // Store the token
    if (response.data.token) {
      await SecureStore.setItemAsync('userToken', response.data.token);
      
      // Fetch profile after successful login
      const profileData = await getProfile();
      return profileData;
    }

    throw new Error('No token received');
  } catch (error) {
    console.error('Login error:', error.response?.data || error.message);
    throw error;
  }
};

export { register, login, getProfile };
