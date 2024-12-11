import { StyleSheet, View } from "react-native";
import React, { useState, useEffect } from "react";
import CategoryList from "../components/CategoryList";
import { getAllCategories } from "../api/restaurants";

const ViewCategories = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <View style={styles.container}>
      <CategoryList categories={categories} onCategorySelect={onCategorySelect} />
    </View>
  );
};

export default ViewCategories;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191414', // Dark grey background
  },
});
