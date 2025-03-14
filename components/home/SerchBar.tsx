import React from 'react'
import { TextInput, View } from 'react-native'

function SerchBar() {
  return (
    <View className='bg-red-400 h-15 top-20 w-11/12 left-0 right-0 m-auto rounded-full'>
      <TextInput placeholder='Search'/>
    </View>
  )
}

export default SerchBar
