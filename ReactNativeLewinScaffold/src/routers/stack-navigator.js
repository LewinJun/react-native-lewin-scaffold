import React from 'react'
import { Platform, Image, StyleSheet, Dimensions } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { parseRouterConfigs } from '../helpers/react-navigation-helper'
import mainStackConfigs from './screen-router'
import { CardStyleInterpolators, HeaderStyleInterpolators } from 'react-navigation-stack'

/**
 * @author lewin 2020-02-17
 * @description 页面路由配置文件注册到react-navigation，全局的header属性配置等
 */
export default createStackNavigator(
    parseRouterConfigs(mainStackConfigs),
    {
      initialRouteName: 'RootTab',
      defaultNavigationOptions: {
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