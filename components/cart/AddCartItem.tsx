// AddCartItem.tsx
import React, { useState, useEffect } from "react";
import { TouchableOpacity, Image, Text, View, ScrollView, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import PlaceOrder from "./PlaceOrder";
import { useNavigation } from "expo-router";

function AddCartItem() {
  const navigation = useNavigation();
  
  // Initial cart items with quantity property
  const initialCartItems = [
    {
      id: 1,
      name: "Margherita Pizza",
      price: 15,
      quantity: 1,
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "Bella Pizza",
    },
    {
      id: 2,
      name: "Sushi Platter",
      price: 22,
      quantity: 1,
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "Tokyo Delights",
    },
    {
      id: 3,
      name: "Spaghetti Carbonara",
      price: 18,
      quantity: 1,
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "Pasta Primo",
    },
    {
      id: 4,
      name: "Margherita Pizza",
      price: 15,
      quantity: 1,
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "Bella Pizza",
    },
    {
      id: 5,
      name: "Sushi Platter",
      price: 22,
      quantity: 1,
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "Tokyo Delights",
    },
    {
      id: 6,
      name: "Spaghetti Carbonara",
      price: 18,
      quantity: 1,
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "Pasta Primo",
    },
  ];

  // State for cart items
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [subTotal, setSubTotal] = useState(0);
  const [delivery, setDelivery] = useState(5);
  const [promoDiscount, setPromoDiscount] = useState(0);

  // Calculate subtotal whenever cart items change
  useEffect(() => {
    calculateSubTotal();
  }, [cartItems]);

  // Calculate subtotal based on price and quantity
  const calculateSubTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    setSubTotal(total);
  };

  // Increase item quantity
  const increaseQuantity = (itemId) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease item quantity, remove if quantity becomes 0
  const decreaseQuantity = (itemId) => {
    const updatedItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
    );
    
    // Remove item if quantity is 0
    const filteredItems = updatedItems.filter(item => item.quantity > 0);
    setCartItems(filteredItems);
  };

  // Remove a specific item from cart
  const removeItem = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  // Clear the entire cart
  const clearCart = () => {
    Alert.alert(
      "Clear Cart",
      "Are you sure you want to remove all items?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Clear", onPress: () => setCartItems([]), style: "destructive" }
      ]
    );
  };

  return (
    <>
      {/* BackTo Home and Delete All Button */}
      <View className="w-11/12 h-16 absolute top-10 left-5 right-5">
        {/* Delete All Button */}
        <TouchableOpacity className="absolute top-0 right-0 w-12 h-16" onPress={clearCart}>
          <Ionicons
            name="trash-bin"
            size={26}
            color="black"
            className="absolute top-4 right-1"
          />
        </TouchableOpacity>

        {/* BackToHome */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back-outline"
            size={24}
            color="black"
            className="absolute top-5 bg-gray-100 rounded-full"
          />
        </TouchableOpacity>
        <Text className="top-4 left-12 font-bold text-2xl">Cart</Text>
      </View>

      {/* Empty cart message */}
      {cartItems.length === 0 && (
        <View className="flex-1 justify-center items-center">
          <Ionicons name="cart-outline" size={80} color="#cccccc" />
          <Text className="text-xl text-gray-400 mt-4">Your cart is empty</Text>
          <TouchableOpacity 
            className="mt-6 bg-emerald-800 px-6 py-3 rounded-md"
            onPress={() => navigation.goBack()}
          >
            <Text className="text-white font-bold">Continue Shopping</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Items */}
      {cartItems.length > 0 && (
        <ScrollView className="w-full absolute top-28 h-2/3 bg-white">
          {cartItems.map((item) => (
            <View
              key={item.id}
              className="h-28 w-11/12 left-0 right-0 m-auto mt-4 mb-1 rounded-lg border border-gray-100 bg-gray-50 p-3"
            >
              <Text className="ml-28 mt-0 font-bold">{item.name}</Text>
              <Text className="ml-28 mt-1 text-gray-600">{item.shopName}</Text>
              <Image
                source={{ uri: item.image }}
                className="w-24 h-24 absolute top-2 bottom-0 my-auto left-3"
              />
              <Text className="ml-28 mt-1 font-bold">${item.price}</Text>

              <TouchableOpacity 
                className="absolute top-1 right-2"
                onPress={() => removeItem(item.id)}
              >
                <Icon name="remove" color={"#a6a6a6"} size={10} />
              </TouchableOpacity>

              {/* Quantity Control (Plus & Minus) */}
              <View className="absolute flex-row items-center justify-center bottom-2 right-2">
                <TouchableOpacity 
                  className="bg-emerald-500 w-6 h-6 rounded-full items-center justify-center"
                  onPress={() => decreaseQuantity(item.id)}
                >
                  <Icon name="minus" size={12} color="#fff" />
                </TouchableOpacity>
                <Text className="mx-4 font-bold">{item.quantity}</Text>
                <TouchableOpacity 
                  className="bg-emerald-500 w-6 h-6 rounded-full items-center justify-center"
                  onPress={() => increaseQuantity(item.id)}
                >
                  <Icon name="plus" size={12} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      )}

      {/* SubTotal */}
      {cartItems.length > 0 && (
        <PlaceOrder 
          subTotal={subTotal} 
          delivery={delivery}
          promoDiscount={promoDiscount}
          setPromoDiscount={setPromoDiscount}
        />
      )}
    </>
  );
}

export default AddCartItem;