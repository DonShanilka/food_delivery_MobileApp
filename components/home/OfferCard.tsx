import React, { useRef, useEffect, useState } from "react";
import { ScrollView, View, Image, Text, Dimensions } from "react-native";

export default function OfferCard() {
  const imageData = [
    {
      id: "1",
      title: "Sunset",
      url: "https://i.pinimg.com/236x/ef/48/0b/ef480b638f32b8b7756b3066f70e8d53.jpg",
    },
    {
      id: "2",
      title: "Mountains",
      url: "https://i.pinimg.com/474x/11/f0/60/11f060820b70e774e32db5699a813b81.jpg",
    },
    {
      id: "3",
      title: "Ocean",
      url: "https://i.pinimg.com/236x/a4/43/62/a44362278ecff20040d06bec569f0294.jpg",
    },
    {
      id: "4",
      title: "City",
      url: "https://i.pinimg.com/236x/5c/e0/48/5ce048e18b958a1b37bdddb2a44079b5.jpg",
    },
  ];

  const scrollViewRef = useRef(null);  
  const [scrollPosition, setScrollPosition] = useState(0); // Track the scroll position

  const screenWidth = Dimensions.get("window").width;
  const imageWidth = screenWidth * 0.9; // 90% of screen width

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollViewRef.current) {
        const newPosition = scrollPosition + imageWidth;
        if (newPosition >= imageWidth * imageData.length) {
          setScrollPosition(0); // Reset to the beginning
        } else {
          setScrollPosition(newPosition); // Move to the next image
        }
      }
    }, 4000); // Scroll every 4 seconds

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, [scrollPosition]); // Effect runs when scrollPosition changes

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: scrollPosition, animated: true });
    }
  }, [scrollPosition]);

  return (
    <ScrollView
      ref={scrollViewRef}  // Reference the ScrollView
      horizontal={true}
      className="bg-slate-600 top-72 w-11/12 left-0 right-0 m-auto"
      showsHorizontalScrollIndicator={false}
    >
      {imageData.map((item) => (
        <View key={item.id} className="bg-white rounded-lg shadow-lg p-4 mb-4 items-center">
          <Image
            source={{ uri: item.url }}
            style={{ width: imageWidth, height: 200 }}
          />
          <Text className="mt-2 text-lg font-bold">{item.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
