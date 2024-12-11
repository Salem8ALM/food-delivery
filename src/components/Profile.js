import { useContext, useEffect, useState } from "react";
import { 
  TouchableOpacity, 
  Text, 
  SafeAreaView, 
  StyleSheet, 
  View, 
  Image,
  ActivityIndicator,
  ScrollView
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
      if (profileData.image) {
        profileData.image = `${profileData.image}?t=${new Date().getTime()}`;
      }
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

  const defaultImage = "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/red-eyed-tree-frog-waving-gail-shumway.jpg";

  // Hardcoded data with more orders
  const orderHistory = [
    { id: 1, restaurant: "Burger King", date: "2024-03-15", total: "$25.99" },
    { id: 2, restaurant: "Pizza Hut", date: "2024-03-10", total: "$32.50" },
    { id: 3, restaurant: "Subway", date: "2024-03-05", total: "$15.75" },
    { id: 4, restaurant: "KFC", date: "2024-03-01", total: "$28.99" },
    { id: 5, restaurant: "Taco Bell", date: "2024-02-28", total: "$18.50" },
  ];
  const totalPoints = 450;

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
        <Image
          source={{ uri: user?.profileImage || defaultImage }}
          style={styles.profileImage}
        />
        <Text style={styles.username}>{user?.username || 'User'}</Text>
        
        <View style={styles.pointsContainer}>
          <Text style={styles.pointsText}>Total Points:</Text>
          <Text style={styles.pointsValue}>{totalPoints}</Text>
        </View>

        <View style={styles.historyContainer}>
          <Text style={styles.historyTitle}>Recent Orders</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.ordersScrollContainer}
          >
            {orderHistory.map((order) => (
              <View key={order.id} style={styles.orderCard}>
                <Text style={styles.orderRestaurant}>{order.restaurant}</Text>
                <Text style={styles.orderDate}>{order.date}</Text>
                <Text style={styles.orderTotal}>{order.total}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
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
    backgroundColor: '#191414',
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
    borderColor: '#1DB954',
    backgroundColor: '#282828',
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
    backgroundColor: '#282828',
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  logoutButton: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: '#1DB954',
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
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  pointsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  pointsText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  pointsValue: {
    color: 'green',
    fontSize: 18,
    fontWeight: 'bold',
  },
  historyContainer: {
    width: '100%',
    marginBottom: 20,
  },
  historyTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  ordersScrollContainer: {
    paddingHorizontal: 10,
  },
  orderCard: {
    backgroundColor: '#282828',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 5,
    width: 150,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  orderRestaurant: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  orderDate: {
    color: '#B3B3B3',
    fontSize: 14,
    marginBottom: 5,
  },
  orderTotal: {
    color: 'green',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Profile;
