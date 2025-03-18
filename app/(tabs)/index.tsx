import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import "../../global.css";
import React from "react";
import OfferCard from "@/components/home/OfferCard";
import SerchBar from "@/components/home/SerchBar";
import Icon from "react-native-vector-icons/FontAwesome";
import FoodCards from "@/components/home/FoodCards";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View className="bg-white w-full h-full">
      <View
        className="w-full h-96 bg-green-800"
        style={{ borderBottomRightRadius: 30, borderBottomLeftRadius: 30 }}
      >
        <Text className="text-white text-3xl font-bold top-14 left-5">Hellow Shanilka !</Text>
        <SerchBar/>
      </View>
    </View>
  );
}
