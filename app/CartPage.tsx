import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function CartPage() {
  const navigation = useNavigation();

  const addToCartItem = [];

  return (
    <ScrollView className=" bg-green-200">
      {addToCartItem.length === 0 ? (
        <View className="bg-blue-300 h-96">
          <Text className="text-white">First View - Cart is Empty</Text>
          <Icon
            name="shopping-cart"
            size={140}
            style={{ left: 0, right: 0, top: 0, bottom: 0, margin: "auto" }}
          />

          <TouchableOpacity
            className="bg-red-500 rounded top-0 w-10"
            onPress={() => navigation.goBack()}
          >
            <Text className="text-white">Close</Text>
          </TouchableOpacity>
        </View>
      ) : (
        // Second View: Displayed if addToCartItem has items
        <View className="bg-red-300 h-96">
          <Text className="text-white">Second View - Items in Cart</Text>
        </View>
      )}
    </ScrollView>
  );
}
