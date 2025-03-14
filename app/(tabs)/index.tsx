import {
  Image,
  StyleSheet,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import "../../global.css";
import React from "react";
import OfferCard from "@/components/home/OfferCard";

export default function HomeScreen() {
  return (
    <ScrollView className="bg-green-50 h-auto w-full">
      <OfferCard />
    </ScrollView>
  );
}
