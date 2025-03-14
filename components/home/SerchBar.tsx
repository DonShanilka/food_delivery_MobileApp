import React from "react";
import { TextInput, View } from "react-native";
import { Search } from "lucide-react-native"; 

function SearchBar() {
  return (
    <View className="bg-gray-200 h-12 w-11/12 rounded-full absolute top-20 left-0 right-0 m-auto">
      <TextInput
        placeholder="Search"
        className="text-lg text-gray-700"
      />
      <Search size={24} color="gray" className="right-0"/>
    </View>
  );
}

export default SearchBar;
