import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import  Icon  from "react-native-vector-icons/FontAwesome";

function PlaceOrder() {
  return (
    <View className="w-full h-96 bottom-0 bg-white">
      <View className="w-11/12 bg-emerald-50 h-12 absolute top-5 left-0 right-0 m-auto rounded-lg border-emerald-100 border">
      <Icon name="dollar" size={20} className="absolute top-5 bottom-0 m-auto"/>
        <Text className="">Promo Code</Text>
      </View>
      <View className="w-11/12 bg-gray-200 h-56 absolute top-20 left-0 right-0 m-auto rounded-lg"></View>
      <TouchableOpacity className="w-11/12 bg-emerald-500 absolute z-10 h-12 bottom-4 left-0 right-0 m-auto rounded-full">
        <Text className="text-center top-0 bottom-0 m-auto font-bold color-white">
          Place Order
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default PlaceOrder;
