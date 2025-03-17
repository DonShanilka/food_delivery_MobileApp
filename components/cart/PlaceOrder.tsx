import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import  Icon  from "react-native-vector-icons/FontAwesome";

function PlaceOrder() {
  return (
    <View className="w-full h-96 absolute bottom-0 bg-white">
      <View className="w-11/12 bg-emerald-50 h-12 -top-40 left-0 right-0 m-auto rounded-lg border-emerald-200 border">
      <Icon name="dollar" size={20} className="absolute top-5 bottom-0 m-auto"/>
        <Text className="">Promo Code</Text>
      </View>
      <View className="w-11/12 bg-gray-200 h-64 absolute top-16 left-5 right-5 m-auto rounded-lg"></View>
      
      <TouchableOpacity className="w-11/12 bg-emerald-500 absolute z-10 h-12 bottom-2 left-5 right-5 rounded-full">
        <Text className="text-center top-0 bottom-0 m-auto font-bold color-white">
          Place Order
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default PlaceOrder;
