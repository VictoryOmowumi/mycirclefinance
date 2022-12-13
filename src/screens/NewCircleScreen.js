import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import NewCircleComponent from '../components/NewCircleComponent'

const NewCircleScreen = () => {
  return (
    <View>
    <StatusBar backgroundColor="white" barStyle='dark-content' animated={true} />
      <NewCircleComponent />
    </View>
  )
}

export default NewCircleScreen