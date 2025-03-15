import { ScrollView,Text,TouchableOpacity, View } from "react-native";
import "../../global.css";
import React from "react";
import OfferCard from "@/components/home/OfferCard";
import SerchBar from "@/components/home/SerchBar";
import Icon from "react-native-vector-icons/FontAwesome";

export default function HomeScreen() {
  return (
    <ScrollView className="bg-white h-full w-full">
      {/* SearchBar and OrderCard */}
      <View className="bg-blue-500 w-11/12 left-0 right-0 m-auto">
        <TouchableOpacity className="bg-white w-6 h-6 items-center absolute top-5 right-0">
          <Icon name="shopping-cart" size={20}/>
        </TouchableOpacity>

        {/* Searchbar */}
        <SerchBar/>
      </View>

      {/* Offer Card */}
      <View className="top-32 w-11/12 left-0 right-0 m-auto rounded-3xl">
        <Text className="mb-4 font-bold ml-1">Special Offers</Text>

        <TouchableOpacity className="absolute right-0 h-5 w-16 bg-green-100 rounded-full">
          <Text className="mb-4 font-bold mr-1 text-green-600 text-center">See All</Text>
        </TouchableOpacity>
        {/* Offer Card */}
        <OfferCard />
      </View>
    </ScrollView>
  );
}
