import React from 'react'
import { Platform, Image, StyleSheet, Dimensions } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { parseRouterConfigs } from '../helpers/react-navigation-helper'
import mainStackConfigs from './screen-router'
import { CardStyleInterpolators, HeaderStyleInterpolators } from 'react-navigation-stack'

export default ()=>{
    return createStackNavigator(
        parseRouterConfigs(mainStackConfigs),
        {
          navigationOptions: {
            headerStyle: {
              backgroundColor: '#fff',
              borderBottomWidth: StyleSheet.hairlineWidth,
              borderBottomColor: '#e4e4e4',
              elevation: 0,
              shadowOpacity: 0
            },
            headerTitleStyle: {
              color: '#222',
              ...Platform.select({
                android: {
                  width: Dimensions.get('window').width - 140,
                  textAlign: 'center'
                }
              })
            },
            headerBackTitle: null,
            headerBackImage: <Image source={require('../assets/icons/back.png')} style={{  ...Platform.select({
              android: {
                marginLeft: -5
              },
              ios: {
                marginLeft: 10
              }
            }) }} />,
            headerTintColor: '#444'
          },
          cardStyle: {
            backgroundColor: '#fff'
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // 切换路由时水平动画
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit, // 切换路时 Header 动画
        }
      )
}