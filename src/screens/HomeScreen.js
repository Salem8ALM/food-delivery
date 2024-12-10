import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import ViewCategories from './ViewCategories';
import RestaurantsList from '../components/RestaurantsList';
import { getAllRestaurants } from '../api/restaurants';

const HomeScreen = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const data = await getAllRestaurants();
        setRestaurants(data);
        setFilteredRestaurants(data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchRestaurants();
  }, []);

  const handleCategorySelect = (categoryId) => {
    if (!categoryId) {
      setFilteredRestaurants(restaurants);
    } else {
      const filtered = restaurants.filter(
        restaurant => restaurant.category._id === categoryId
      );
      setFilteredRestaurants(filtered);
    }
  };

  return (
    <View style={styles.container}>
      <ViewCategories onCategorySelect={handleCategorySelect} />
      <RestaurantsList restaurants={filteredRestaurants} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default HomeScreen; 