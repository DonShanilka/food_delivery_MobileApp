import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const carticon = require("../assets/icons/cartIcon.png");

export default function CartPage() {
  const navigation = useNavigation();

  const addToCartItem = [];

  return (
    <ScrollView className=" bg-white">
      {addToCartItem.length === 0 ? (
        <View className="bg-white h-96 w-full top-56">
          <Image source={carticon} style={{width:120, height:120, left:-15, right:0, top:70, bottom:0, margin:'auto'}} />
          <TouchableOpacity
            className="bg-black rounded left-0 right-0 m-auto w-40 h-8"
            onPress={() => navigation.goBack()}
          >
            <Text className="text-white text-center top-0 bottom-0 m-auto">Go To Shopping</Text>
          </TouchableOpacity>
          <Text className="text-black">Cart is Empty</Text>
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
