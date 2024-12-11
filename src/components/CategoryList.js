import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const CategoryList = ({ categories, onCategorySelect }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      <TouchableOpacity 
        style={styles.categoryCard}
        onPress={() => onCategorySelect(null)}
      >
        <View style={[styles.image, styles.allCategory]}>
          <Text style={styles.allCategoryText}>All</Text>
        </View>
        <Text style={styles.text}>All</Text>
      </TouchableOpacity>

      {categories.map((category) => (
        <TouchableOpacity 
          key={category._id} 
          style={styles.categoryCard}
          onPress={() => onCategorySelect(category._id)}
        >
          <Image source={{ uri: category.image }} style={styles.image} />
          <Text style={styles.text}>{category.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#191414',
  },
  categoryCard: {
    alignItems: 'center',
    marginRight: 15,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  allCategory: {
    backgroundColor: '#1DB954',
    justifyContent: 'center',
    alignItems: 'center',
  },
  allCategoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  }
});

export default CategoryList;
