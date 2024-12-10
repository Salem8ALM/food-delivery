import { useContext, useEffect, useState } from "react";
import { 
  TouchableOpacity, 
  Text, 
  SafeAreaView, 
  StyleSheet, 
  View, 
  Image,
  ActivityIndicator 
} from "react-native";
import UserContext from "../context/UserContext";
import * as SecureStore from 'expo-secure-store';
import { AntDesign } from '@expo/vector-icons';
import { getProfile } from "../api/auth";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const profileData = await getProfile();
      setUser(profileData);
      setLoading(false);
      console.log('Profile Image URL:', profileData.image);
    } catch (error) {
      console.error('Error fetching profile:', error);
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await SecureStore.deleteItemAsync('userToken');
      setUser(null);
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.centered]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        {user?.image ? (
          <Image 
            source={{ 
              uri: user.image,
              cache: 'reload',
              headers: {
                Pragma: 'no-cache'
              }
            }} 
            style={styles.profileImage}
            onError={(error) => console.error('Image loading error:', error.nativeEvent.error)}
          />
        ) : (
          <View style={[styles.profileImage, styles.defaultAvatar]}>
            <AntDesign name="user" size={60} color="#666" />
          </View>
        )}
        <Text style={styles.username}>{user?.username || 'User'}</Text>
      </View>

      <TouchableOpacity 
        style={styles.logoutButton}
        onPress={handleLogout}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#fff',
    backgroundColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  defaultAvatar: {
    backgroundColor: '#e1e1e1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  logoutButton: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: '#ff4757',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Profile;
