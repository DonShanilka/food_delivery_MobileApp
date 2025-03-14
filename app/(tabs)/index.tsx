import { Image, StyleSheet, Platform, ScrollView, Text } from 'react-native';
import "../../global.css"

export default function HomeScreen() {
  return (
    <ScrollView className='bg-cyan-950 h-full w-full'>
      <Text className='text-cyan-200'>Hellow Shanilka</Text>
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
