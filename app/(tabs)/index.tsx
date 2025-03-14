import { ScrollView,TouchableOpacity, View } from "react-native";
import "../../global.css";
import React from "react";
import OfferCard from "@/components/home/OfferCard";
import SerchBar from "@/components/home/SerchBar";
import Icon from "react-native-vector-icons/FontAwesome";

export default function HomeScreen() {
  return (
    <ScrollView className="bg-white h-auto w-full">
      <TouchableOpacity className="absolute bg-white w-6 h-6 items-center top-5 right-4">
        <Icon name="shopping-cart" size={20}/>
      </TouchableOpacity>
      <SerchBar/>
      <View className="top-28 w-11/12 left-0 right-0 m-auto rounded-3xl">
        <OfferCard />
      </View>
    </ScrollView>
  );
}
