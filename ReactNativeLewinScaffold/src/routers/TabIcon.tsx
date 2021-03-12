import React from 'react'
import { View, Image } from 'react-native'
import styled from 'styled-components'

const Text = styled.Text`
  margin-top: 3;
  font-size: 10;
`

const TabIcon = ({ focused, text, icon }) => {
  const color = focused ? '#284DA3' : '#dddddd'

  return (
    <View style={{ alignItems: "center", justifyContent: "center", marginTop: 15 }}>
      <Image source={icon} style={{ tintColor: color }} />
      <Text style={{ color }}>{text}</Text>
    </View>
  )
}

export default TabIcon
