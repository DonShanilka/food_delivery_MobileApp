import React from "react";
import { Image, Text, View } from "react-native";

function AddCartItem() {
  const cartItems = [
    {
      id: 1,
      name: "Margherita Pizza",
      price: 18,
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "Pizza Haven",
    },
    {
      id: 2,
      name: "Sushi Platter",
      price: 18,
      image:
        "https://i.pinimg.com/236x/a9/fd/bd/a9fdbd00141682c6a9e848c43dbf4c5c.jpg",
      shopName: "Sakura Sushi",
    },
  ];

  let subTotal: number = 0;

  cartItems.forEach((item) => {
    subTotal += item.price;
  });

  return (
    <View className="w-11/12 h-auto left-0 right-0 m-auto">
      {cartItems.map((value) => (
        <View
          key={value.id}
          style={{
            height: 90,
            marginBottom: 10,
            borderRadius: 10,
            borderWidth:1,
            borderColor: "#e6e6e6",
            backgroundColor: "#f2f2f2",
          }}
        >
          <Text style={{ left: 110, marginTop: 13, fontWeight: "bold" }}>
            {value.name}
          </Text>
          <Text
            style={{
              left: 110,
              marginTop: 1,
              fontWeight: "400",
              color: "#8c8c8c",
            }}
          >
            {value.shopName}
          </Text>
          <Image
            source={{ uri: value.image }}
            style={{
              width: 80,
              height: 75,
              borderRadius: 0,
              position: "absolute",
              top: 0,
              bottom: 0,
              margin: "auto",
              left: 10,
            }}
          />
          <Text style={{ left: 110, marginTop: 1, fontWeight: "bold" }}>
            ${value.price}
          </Text>
        </View>
      ))}
    </View>
  );
}

export default AddCartItem;
