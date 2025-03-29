// AddCartItem.tsx
import React, { useState, useEffect } from "react";
import { TouchableOpacity, Image, Text, View, ScrollView, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import PlaceOrder from "./PlaceOrder";
import { useNavigation } from "expo-router";
import { useRoute } from "@react-navigation/native";

function AddCartItem() {
  const navigation = useNavigation();
  const route = useRoute();
  const { foodData = [] } = route.params || {}; // Ensure foodData is an array

  const [cartItems, setCartItems] = useState(Array.isArray(foodData) ? foodData : []);
  const [subTotal, setSubTotal] = useState(0);
  const [delivery, setDelivery] = useState(5);
  const [promoDiscount, setPromoDiscount] = useState(0);

  useEffect(() => {
    calculateSubTotal();
  }, [cartItems]);

  const calculateSubTotal = () => {
    let total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setSubTotal(total);
  };

  const increaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === itemId ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    Alert.alert("Clear Cart", "Are you sure you want to remove all items?", [
      { text: "Cancel", style: "cancel" },
      { text: "Clear", onPress: () => setCartItems([]), style: "destructive" },
    ]);
  };

  return (
    <>
      <View className="w-11/12 h-16 absolute top-4 left-5 right-5">
        <TouchableOpacity className="absolute top-0 right-0 w-12 h-16" onPress={clearCart}>
          <Ionicons name="trash-bin" size={26} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
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
          {cartItems.map((item) => (
            <View key={item.id} className="h-28 w-11/12 m-auto mt-4 mb-1 rounded-lg border border-gray-100 bg-gray-50 p-3">
              <Text className="ml-28 font-bold">{item.name}</Text>
              <Text className="ml-28 text-gray-600">{item.shopName}</Text>
              <Image source={{ uri: item.image }} className="w-24 h-24 absolute top-2 left-3" />
              <Text className="ml-28 font-bold">${item.price}</Text>
              <TouchableOpacity className="absolute top-1 right-2" onPress={() => removeItem(item.id)}>
                <Icon name="remove" color={"#a6a6a6"} size={10} />
              </TouchableOpacity>
              <View className="absolute flex-row items-center bottom-2 right-2">
                <TouchableOpacity className="bg-green-800 w-6 h-6 rounded-full items-center" onPress={() => decreaseQuantity(item.id)}>
                  <Icon name="minus" size={12} color="#fff" />
                </TouchableOpacity>
                <Text className="mx-4 font-bold">{item.quantity}</Text>
                <TouchableOpacity className="bg-green-800 w-6 h-6 rounded-full items-center" onPress={() => increaseQuantity(item.id)}>
                  <Icon name="plus" size={12} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      )}

      {cartItems.length > 0 && <PlaceOrder subTotal={subTotal} delivery={delivery} promoDiscount={promoDiscount} setPromoDiscount={setPromoDiscount} />}
    </>
  );
}

export default AddCartItem;
