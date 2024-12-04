import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CategoryList from "../components/CategoryList";
import restaurantCategories from "../data/Categories";

const ViewCategories = () => {
  return (
    <View>
      <CategoryList categories={restaurantCategories} />
    </View>
  );
};

export default ViewCategories;

const styles = StyleSheet.create({});
