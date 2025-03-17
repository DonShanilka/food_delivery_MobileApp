import React from "react";
import { TouchableOpacity, Image, Text, View, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import PlaceOrder from "./PlaceOrder";

function AddCartItem() {
  const cartItems = [
    {
      id: 1,
      name: "Margherita Pizza",
      price: 15,
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "Bella Pizza",
    },
    {
      id: 2,
      name: "Sushi Platter",
      price: 22,
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "Tokyo Delights",
    },
    {
      id: 3,
      name: "Spaghetti Carbonara",
      price: 18,
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "Pasta Primo",
    },
  ];

  let subTotal: number = 0;
  cartItems.forEach((item) => {
    subTotal += item.price;
  });

  return (
    <>
      {/* BackTo Home and Delete All Button */}
      <View className="w-11/12 h-16 absolute top-10 left-5 right-5">

      {/* Delete All Button */}
        <TouchableOpacity className="absolute top-0 right-0 w-12 h-16">
          <Ionicons
            name="trash-bin"
            size={26}
            color="black"
            className="absolute top-4 right-1"
          />
        </TouchableOpacity>

        {/* BackToHome */}
        <TouchableOpacity>
          <Ionicons
            name="arrow-back-outline"
            size={24}
            color="black"
            className="absolute top-5 bg-gray-100 rounded-full"
          />
        </TouchableOpacity>
        <Text className="top-4 left-12 font-bold text-2xl">Cart</Text>
      </View>

      {/* Items */}
      <ScrollView className="w-full absolute top-32 h-3/5 bg-white">
        {cartItems.map((value) => (
          <View
            key={value.id}
            className="h-32 w-11/12 left-0 right-0 m-auto mt-3 mb-1 rounded-lg border border-gray-100 bg-gray-50 p-3"
          >
            <Text className="ml-28 mt-2 font-bold">{value.name}</Text>
            <Text className="ml-28 mt-1 text-gray-600">{value.shopName}</Text>
            <Image
              source={{ uri: value.image }}
              className="w-20 h-16 absolute top-0 bottom-0 my-auto left-3"
            />
            <Text className="ml-28 mt-1 font-bold">${value.price}</Text>

            <TouchableOpacity className="absolute top-1 right-2">
              <Icon name="remove" color={"#a6a6a6"} size={10} />
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

      {/* SubTotal */}
      <PlaceOrder />
    </>
  );
}

export default AddCartItem;
