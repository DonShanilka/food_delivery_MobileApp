import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import  Icon  from "react-native-vector-icons/FontAwesome";

function PlaceOrder() {
  return (
    <View className="w-full h-96 absolute bottom-0 bg-white">

      {/* Promotion */}
      <View className="w-11/12 bg-emerald-50 h-12 absolute top-4 left-5 right-5 rounded-lg border-emerald-200 border">
      <Icon name="dollar" size={20} className="absolute top-5 bottom-0 m-auto"/>
        <Text className="">Promo Code</Text>
      </View>

      {/* Cal Total */}
      <View className="w-11/12 bg-white h-48 absolute top-24 left-5 right-5 m-auto rounded-lg">
        <View className="h-14 w-full border-b-2 border-gray-200">
          <Text className="absolute left-0 top-4 font-bold text-gray-400">SubTotal</Text>
          <Text className="absolute right-0 top-4 font-bold text-black text-xl">$21</Text>
        </View>
        <View className="h-14 w-full border-b-2 border-gray-200">
          <Text className="absolute left-0 top-4 font-bold text-gray-400">Delivery</Text>
          <Text className="absolute right-0 top-4 font-bold text-black text-xl">$5</Text>
        </View>
        <View className="h-14 w-full">
          <Text className="absolute left-0 top-4 font-bold text-gray-800 text-2xl">Total</Text>
          <Text className="absolute right-0 top-4 font-bold text-emerald-600 text-2xl">$26.43</Text>
        </View>
      </View>
      
      {/* Place Order Button */}
      <TouchableOpacity className="w-11/12 bg-emerald-500 absolute z-10 h-12 bottom-8 left-5 right-5 rounded-full">
        <Text className="text-center top-0 bottom-0 m-auto font-bold color-white">
          Place Order
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default PlaceOrder;
