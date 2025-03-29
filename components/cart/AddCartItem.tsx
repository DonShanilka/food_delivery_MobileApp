import React from "react";
import { TouchableOpacity, Image, Text, View, ScrollView, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import PlaceOrder from "./PlaceOrder";
import { useNavigation } from "expo-router";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from "@/reducer/CartSlice";

function AddCartItem() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const subTotal = cartItems.reduce((total:any, item:any) => total + item.price * item.quantity, 0);
  const delivery = 5;
  const promoDiscount = 0;

  return (
    <>
      <View className="w-11/12 h-16 absolute top-4 left-5 right-5">
        <TouchableOpacity className="absolute top-0 right-0 w-12 h-16" onPress={() => dispatch(clearCart())}>
          <Ionicons name="trash-bin" size={26} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color="black" className="absolute top-5 bg-gray-100 rounded-full" />
        </TouchableOpacity>
        <Text className="top-4 left-12 font-bold text-2xl">Cart</Text>
      </View>
      {cartItems.length === 0 ? (
        <View className="flex-1 justify-center items-center">
          <Ionicons name="cart-outline" size={80} color="#cccccc" />
          <Text className="text-xl text-gray-400 mt-4">Your cart is empty</Text>
          <TouchableOpacity className="mt-6 bg-emerald-800 px-6 py-3 rounded-md" onPress={() => navigation.goBack()}>
            <Text className="text-white font-bold">Continue Shopping</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <ScrollView className="w-full absolute top-20 h-2/3 bg-white">
          {cartItems.map((item:any) => (
            <View key={item.id} className="h-28 w-11/12 left-0 right-0 m-auto mt-4 mb-1 rounded-lg border border-gray-100 bg-gray-50 p-3">
              <Text className="ml-28 mt-0 font-bold">{item.itemName}</Text>
              <Text className="ml-28 mt-1 text-gray-600">{item.shopName}</Text>
              <Image source={{ uri: item.image }} className="w-24 h-24 absolute top-2 left-3" />
              <Text className="ml-28 mt-1 font-bold">${item.price}</Text>
              <View className="absolute flex-row items-center justify-center bottom-2 right-2">
                <TouchableOpacity className="bg-green-800 w-6 h-6 rounded-full" onPress={() => dispatch(decreaseQuantity(item.id))}><Icon name="minus" size={12} color="#fff" /></TouchableOpacity>
                <Text className="mx-4 font-bold">{item.quantity}</Text>
                <TouchableOpacity className="bg-green-800 w-6 h-6 rounded-full" onPress={() => dispatch(increaseQuantity(item.id))}><Icon name="plus" size={12} color="#fff" /></TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </>
  );
}
export default AddCartItem;
