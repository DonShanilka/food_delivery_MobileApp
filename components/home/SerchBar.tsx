import React from "react";
import { TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function SearchBar() {
  return (
    <View className="text-lg text-gray-700 text-left
    bg-gray-200 h-12 w-11/12 rounded-full absolute top-20 left-0 right-0 m-auto">
      <TextInput
        placeholder="Search"
        />
  <Icon name="search" size={20} color={'#666666'} className="top-24 left-72"/>
    </View>
  );
}

export default SearchBar;
