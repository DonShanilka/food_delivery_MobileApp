import React from "react";
import { TouchableOpacity, Image, Text, View, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import PlaceOrder from "./PlaceOrder";

function AddCartItem() {
  const cartItems = [
      {
        id: 1,
        name: "Margherita Pizza",
        price: 15,
        image: "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
        shopName: "Bella Pizza",
      },
      {
        id: 2,
        name: "Sushi Platter",
        price: 22,
        image: "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
        shopName: "Tokyo Delights",
      },
      {
        id: 3,
        name: "Spaghetti Carbonara",
        price: 18,
        image: "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
        shopName: "Pasta Primo",
      },
      {
        id: 4,
        name: "Sushi Rolls",
        price: 20,
        image: "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
        shopName: "Sushi Express",
      },
      {
        id: 5,
        name: "Cheeseburger",
        price: 12,
        image: "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
        shopName: "Burger King",
      },
      {
        id: 6,
        name: "Ramen Noodles",
        price: 16,
        image: "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
        shopName: "Ramen House",
      },
      {
        id: 7,
        name: "Margherita Pizza",
        price: 17,
        image: "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
        shopName: "Pizza Roma",
      },
      {
        id: 8,
        name: "Tuna Sushi",
        price: 24,
        image: "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
        shopName: "Sushi World",
      },
      {
        id: 9,
        name: "Margarita Pizza",
        price: 14,
        image: "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
        shopName: "The Pizza Co.",
      },
      {
        id: 10,
        name: "Sashimi",
        price: 28,
        image: "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
        shopName: "Sushi Palace",
      },
      {
        id: 11,
        name: "Lasagna",
        price: 19,
        image: "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
        shopName: "Italian Bistro",
      },
      {
        id: 12,
        name: "Sushi Bento",
        price: 21,
        image: "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
        shopName: "Bento Box",
      },
      {
        id: 13,
        name: "Pepperoni Pizza",
        price: 16,
        image: "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
        shopName: "Pizza Slice",
      },
      {
        id: 14,
        name: "Nigiri Sushi",
        price: 25,
        image: "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
        shopName: "Sushi Delight",
      },
      {
        id: 15,
        name: "Fettuccine Alfredo",
        price: 22,
        image: "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
        shopName: "Pasta Delight",
      },
      {
        id: 16,
        name: "Tempura Rolls",
        price: 18,
        image: "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
        shopName: "Sushi Corner",
      },
      {
        id: 17,
        name: "Caprese Salad",
        price: 13,
        image: "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
        shopName: "Healthy Eats",
      },
      {
        id: 18,
        name: "California Rolls",
        price: 19,
        image: "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
        shopName: "Sushi Express",
      },
      {
        id: 19,
        name: "Seafood Pizza",
        price: 21,
        image: "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
        shopName: "Pizza Delight",
      },
      {
        id: 20,
        name: "Dragon Rolls",
        price: 26,
        image: "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
        shopName: "Sushi Fusion",
      },
    ];

  let subTotal: number = 0;
  cartItems.forEach((item) => {
    subTotal += item.price;
  });

  return (
    <>
    <ScrollView className="w-full top-20 h-auto mx-auto bg-white">
      {cartItems.map((value) => (
        <View
          key={value.id}
          className="h-24 w-11/12 left-0 right-0 m-auto mb-3 rounded-lg border border-gray-200 bg-gray-100 p-3"
        >
          <Text className="ml-28 mt-2 font-bold">{value.name}</Text>
          <Text className="ml-28 mt-1 text-gray-600">{value.shopName}</Text>
          <Image
            source={{ uri: value.image }}
            className="w-20 h-16 absolute top-0 bottom-0 my-auto left-3"
          />
          <Text className="ml-28 mt-1 font-bold">${value.price}</Text>

          <TouchableOpacity className="absolute top-1 right-2">
            <Icon name="remove" color={"#a6a6a6"} size={10}/>
          </TouchableOpacity>

          {/* Quantity Control (Plus & Minus) */}
          <View className="absolute flex-row items-center justify-center bottom-2 right-2">
            <TouchableOpacity className="bg-emerald-500 w-6 h-6 rounded-full items-center justify-center">
              <Icon name="minus" size={12} color="#fff" />
            </TouchableOpacity>
            <Text className="mx-4 font-bold">1</Text>
            <TouchableOpacity className="bg-emerald-500 w-6 h-6 rounded-full items-center justify-center">
              <Icon name="plus" size={12} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
    <PlaceOrder/>
    </>
  );
}

export default AddCartItem;
