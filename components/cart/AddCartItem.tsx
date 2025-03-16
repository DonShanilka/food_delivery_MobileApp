import React from "react";
import { TouchableOpacity, Image, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function AddCartItem() {
  const cartItems = [
    {
      id: 1,
      name: "Margherita Pizza",
      price: 18,
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "Pizza Haven",
    },
    {
      id: 2,
      name: "Sushi Platter",
      price: 18,
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "Sakura Sushi",
    },
  ];

  let subTotal: number = 0;
  cartItems.forEach((item) => {
    subTotal += item.price;
  });

  return (
    <View className="w-11/12 h-auto mx-auto">
      {cartItems.map((value) => (
        <View
          key={value.id}
          className="h-24 mb-3 rounded-lg border border-gray-300 bg-gray-200 p-3"
        >
          <Text className="ml-28 mt-2 font-bold">{value.name}</Text>
          <Text className="ml-28 mt-1 text-gray-600">{value.shopName}</Text>
          <Image
            source={{ uri: value.image }}
            className="w-20 h-16 absolute top-0 bottom-0 my-auto left-3"
          />
          <Text className="ml-28 mt-1 font-bold">${value.price}</Text>

          {/* Quantity Control (Plus & Minus) */}
          <View className="absolute flex-row items-center justify-center bottom-2 right-5">
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
    </View>
  );
}

export default AddCartItem;
