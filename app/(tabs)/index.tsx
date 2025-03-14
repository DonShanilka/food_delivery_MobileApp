import { ScrollView, View } from "react-native";
import "../../global.css";
import React from "react";
import OfferCard from "@/components/home/OfferCard";
import SerchBar from "@/components/home/SerchBar";

export default function HomeScreen() {
  return (
    <ScrollView className="bg-white h-auto w-full">
      <SerchBar/>
      <View className="top-52 w-11/12 left-0 right-0 m-auto rounded-3xl">
        <OfferCard />
      </View>
    </ScrollView>
  );
}
