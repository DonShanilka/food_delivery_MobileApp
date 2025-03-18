import { useFonts } from "expo-font";
import { useEffect } from "react";
import "react-native-reanimated";
import React from "react";
import { View, Text, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../app/SplashScreen";
import LoginScreen from "../app/LoginScreen";
import SignUpScreen from "../app/SignUpScreen";
import HomeScreen from "./(tabs)/index";
import ProfileScreen from "./(tabs)/ProfileScreen ";
import CartPage from "../app/CartPage";
import FoodDetails from "../app/FoodDetails";
import TabNavigator from "./(tabs)/_layout";

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Auth Flow */}
        <Stack.Screen name="Splash" component={SplashScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}  options={{ headerShown: false }}/>

        {/* Main App Flow */}
        <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="CartPage" component={CartPage}  options={{ headerShown: false }}/>
        <Stack.Screen name="FoodDetails" component={FoodDetails}  options={{ headerShown: false }}/>
      </Stack.Navigator>
      <StatusBar />
    </>
  );
}
