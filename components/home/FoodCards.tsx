import { fetchItems } from "@/reducer/ItemSlice";
import { useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { ScrollView, TouchableOpacity, Image, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/reducer/CartSlice";
import AddCartItem from "../cart/AddCartItem";

function FoodCards() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items || []);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <ScrollView className="absolute h-2/4 w-full top-2/4">
      <Text className="font-bold mt-3 ml-5 text-xl">Popular Foods</Text>
      <View className="w-full mt-4">
        {items.map((foods:any) => (
          <TouchableOpacity key={foods.id} className="h-44 mb-6" style={{
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
            onPress={() => navigation.navigate("FoodDetails", { foodData: foods })}>
            <Text className="text-green-800 text-2xl font-bold mt-2 left-40">{foods.itemName}</Text>
            <Text className="top-2 left-40 mt-0 w-60 text-sm text-gray-600">{foods.description}</Text>
            <Text className="top-2 left-40 mt-2 text-sm text-gray-400">{foods.shopName}</Text>
            <Text className="top-4 left-40 text-green-800 text-2xl font-bold">$ {foods.price}</Text>
            <Image source={{ uri: foods.image }} style={{ width: 100, height: 100, borderRadius: 5, position: "absolute", top: 26, left: 10 }}/>
            <TouchableOpacity className="bg-emerald-800 w-10 h-10 absolute bottom-5 right-5 rounded-full items-center justify-center" onPress={() => navigation.navigate("CartPage", { foodData: foods })}>
              <Icon size={20} name="plus" color={"white"} />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
export default FoodCards;