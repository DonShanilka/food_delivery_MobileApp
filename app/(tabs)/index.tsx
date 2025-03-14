import { ScrollView, View } from "react-native";
import "../../global.css";
import React from "react";
import OfferCard from "@/components/home/OfferCard";

export default function HomeScreen() {
  return (
    <ScrollView className="bg-green-50 h-auto w-full">
      <View className="top-52 w-11/12 left-0 right-0 m-auto rounded-3xl">
        <OfferCard />
      </View>
    </ScrollView>
  );
}
