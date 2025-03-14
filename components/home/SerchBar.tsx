import React from 'react'
import { TextInput, View } from 'react-native'

function SerchBar() {
  return (
    <><View className='bg-gray-200 h-30 w-11/12 rounded-3xl top-20 left-0 right-0 m-auto absolute text-xs'>
      <TextInput placeholder='Search' className='text-2xl'/>
    </View>
    </>
  )
}

export default SerchBar
