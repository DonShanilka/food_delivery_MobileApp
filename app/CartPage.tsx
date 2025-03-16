import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { icons } from "@/assets/assets";

export default function CartPage() {
  const navigation = useNavigation();

  const addToCartItem = [];

  return (
    <ScrollView className=" bg-green-200">
      <TouchableOpacity 
        className="bg-red-500 rounded top-0 w-10"
        onPress={() => navigation.goBack()}
      >
        <Text className="text-white">Close</Text>
      </TouchableOpacity>

      {addToCartItem.length === 0 ? (
        <View className="bg-blue-300 h-96">
          <Text className="text-white">First View - Cart is Empty</Text>
          <Image src={icons.orderCardBgIcon}/>
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
