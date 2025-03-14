import { Image, StyleSheet, Platform, ScrollView, Text, View } from 'react-native';
import "../../global.css"
import React from 'react';

export default function HomeScreen() {
  return (
    <ScrollView className='bg-green-50 h-auto w-full'>
      <View className='bg-slate-500 h-48 w-10/12 absolute'>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
