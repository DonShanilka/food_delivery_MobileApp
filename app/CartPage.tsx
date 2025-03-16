import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AddCartItem from "@/components/cart/AddCartItem";
import PlaceOrder from "@/components/cart/PlaceOrder";
const carticon = require("../assets/icons/cartIcon.png");

export default function CartPage() {
  const navigation = useNavigation();

  const addToCartItem = [1];

  return (
    <>
      {addToCartItem.length === 0 ? (
        <View className="bg-white h-96 w-full top-56">
          <Image
            source={carticon}
            style={{
              width: 120,
              height: 120,
              left: -15,
              right: 0,
              top: 95,
              bottom: 0,
              margin: "auto",
              zIndex: 5,
            }}
          />
          <TouchableOpacity
            className="bg-black rounded left-0 right-0 m-auto w-40 h-8"
            onPress={() => navigation.navigate("(tabs)")}
            style={{top:50}}
          >
            <Text className="text-white text-center top-0 bottom-0 m-auto font-bold">
              Go To Shopping
            </Text>
          </TouchableOpacity>
          <Text className="text-black text-center left-0 right-0 m-auto w-10/12">
            Cart is Empty. Save cart items here to get notified when the outlet
            is available
          </Text>
        </View>
      ) : (
        <>
        <View className="top-0 h-10 bg-white">
          <Text className="text-white">Second View - Items in Cart</Text>
        </View>
        <AddCartItem/>
        </>
      )}

    </>
  );
}
