import { useNavigation } from "expo-router";
import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { Image, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function FoodCards() {
  const navigation = useNavigation();

  const foodItems = [
    {
      id: 1,
      name: "Margherita Pizza",
      price: "$12.99",
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "Pizza Haven",
      description: "Classic pizza with fresh tomatoes.",
    },
    {
      id: 2,
      name: "Sushi Platter",
      price: "$18.99",
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "Sakura Sushi",
      description: "Assorted sushi rolls with fresh fish and vegetables.",
    },
    {
      id: 3,
      name: "Cheeseburger",
      price: "$9.99",
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "Burger Town",
      description: "Juicy beef patty with melted cheese, lettuce, and pickles.",
    },
    {
      id: 4,
      name: "Pasta Carbonara",
      price: "$14.99",
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "Italian Bistro",
      description: "Creamy pasta with pancetta, egg, and Parmesan cheese.",
    },
    {
      id: 5,
      name: "Caesar Salad",
      price: "$8.99",
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "Healthy Bites",
      description: "Crisp romaine lettuce with Caesar dressing and croutons.",
    },
    {
      id: 6,
      name: "BBQ Ribs",
      price: "$22.99",
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "Smokehouse Grill",
      description: "Tender ribs glazed with smoky BBQ sauce.",
    },
    {
      id: 7,
      name: "Taco Trio",
      price: "$10.99",
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "MexiFiesta",
      description: "Three tacos with your choice of fillings and toppings.",
    },
    {
      id: 8,
      name: "Pad Thai",
      price: "$13.99",
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "Thai Delight",
      description: "Stir-fried rice noodles with shrimp, peanuts, and lime.",
    },
    {
      id: 9,
      name: "Chicken Shawarma",
      price: "$11.99",
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "Middle East Eats",
      description:
        "Tender grilled chicken served with warm pita and garlic sauce.",
    },
    {
      id: 10,
      name: "Pepperoni Pizza",
      price: "$14.99",
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "Pizza Haven",
      description: "Classic pizza topped with spicy pepperoni and mozzarella.",
    },
  ];

  return (
    <ScrollView className="absolute h-2/4 w-full top-2/4">
      <Text className="font-bold mt-3 ml-5 text-xl">Populer Foods</Text>
      <View className="w-full mt-4">
        {foodItems.map((foods) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("FoodDetails")}
            key={foods.id}
            className="h-44 mb-6"
            style={{
              backgroundColor: "white",
              borderRadius: 12,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 2,
              marginVertical: 8,
              marginHorizontal: 16,
            }}
          >
            <Text className="text-green-800 text-2xl font-bold mt-4 left-40">
              {foods.name}
            </Text>
            <Text className="top-2 left-40 w-60 text-sm text-gray-500">
              {foods.description}
            </Text>
            <Text className="top-2 left-40  text-sm text-gray-500">
              {foods.shopName}
            </Text>
            <Text className="top-4 left-40 text-green-800 text-2xl font-bold">
              {foods.price}
            </Text>
            <Image
              source={{ uri: foods.image }}
              style={{
                width: 120,
                height: 120,
                borderRadius: 5,
                position: "absolute",
                top: 15,
                left: 0,
              }}
            />

            <TouchableOpacity className="bg-emerald-800 w-10 h-10 absolute bottom-5 right-5 rounded-full items-center justify-center">
              <Icon
              size={20}
                name="plus"
                color={"white"}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

export default FoodCards;
