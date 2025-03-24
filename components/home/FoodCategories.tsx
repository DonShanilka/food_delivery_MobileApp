import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { ScrollView, View } from 'react-native'

function FoodCategories() {
  return (
    <View className='w-11/12 left-5 right-5 bg-white relative top-28'>
      <ScrollView horizontal={true} className='flex flex-wrap'>
       <TouchableOpacity className='w-24 h-24 bg-gray-100 ml-3'><Text>1</Text></TouchableOpacity>
       <TouchableOpacity className='w-24 h-24 bg-gray-100 ml-9'><Text>2</Text></TouchableOpacity>
       <TouchableOpacity className='w-24 h-24 bg-gray-100 ml-9'><Text>3</Text></TouchableOpacity>
       <TouchableOpacity className='w-24 h-24 bg-gray-100 ml-9'><Text>4</Text></TouchableOpacity>
       <TouchableOpacity className='w-24 h-24 bg-gray-100 ml-9'><Text>5</Text></TouchableOpacity>
       <TouchableOpacity className='w-24 h-24 bg-gray-100 ml-9'><Text>6</Text></TouchableOpacity>
       <TouchableOpacity className='w-24 h-24 bg-gray-100 ml-9'><Text>7</Text></TouchableOpacity>
       <TouchableOpacity className='w-24 h-24 bg-gray-100 ml-9'><Text>8</Text></TouchableOpacity>
       <TouchableOpacity className='w-24 h-24 bg-gray-100 ml-9'><Text>9</Text></TouchableOpacity>
       <TouchableOpacity className='w-24 h-24 bg-gray-100 ml-9'><Text>10</Text></TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default FoodCategories
