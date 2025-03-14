import React from "react";
import { TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function SearchBar() {
  return (
    <View
      className="text-lg text-gray-700 text-left
    bg-gray-200 h-8 w-11/12 rounded-full absolute top-14 left-0 right-0 m-auto"
    >
      <TextInput
        placeholder="Search"
        className="text-sm text-gray-400 text-left
    bg-gray-200 h-8 w-9/12 rounded-full absolute top-0 left-12 border-none outline-none focus:text-black"
      />
      <Icon
        name="search"
        size={16}
        color={"#666666"}
        className="top-0 bottom-0 m-auto -left-32"
      />
    </View>
  );
}

export default SearchBar;
