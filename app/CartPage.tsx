import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CartPage() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-lg font-bold">Your Cart</Text>

      {/* Close button to return to previous screen */}
      <TouchableOpacity 
        className="mt-5 px-4 py-2 bg-red-500 rounded"
        onPress={() => navigation.goBack()}
      >
        <Text className="text-white">Close</Text>
      </TouchableOpacity>
    </View>
  );
}
