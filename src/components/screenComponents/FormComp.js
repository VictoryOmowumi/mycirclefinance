import { View } from 'react-native'
import React from 'react'
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components'
const FormComp = () => {
  return (
    <ApplicationProvider>
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>HOME</Text>
  </Layout>
    </ApplicationProvider>
  )
}

export default FormComp