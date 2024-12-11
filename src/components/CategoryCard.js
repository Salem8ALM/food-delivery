import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import restaurantCategories from '../data/Categories'

const CategoryCard = ({restaurantCategories}) => {
  
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.card} >
    <Image source={{uri: restaurantCategories.categoryImage}}/>

    </TouchableOpacity>
    <Text>{restaurantCategories.categoryName}</Text>
    </View>
    
  )
}

export default CategoryCard

const styles = StyleSheet.create({
    container:{
        flexDirection:"column",

    },
    card:{
        borderRadius:100,
        backgroundColor:"#282828",


    }


})