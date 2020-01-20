import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import TabIcon from './TabIcon'
import Home from '../screens/home'
import Order from '../screens/order'
import Mine from '../screens/mine'
import { parseRouterConfigs } from '../helpers/react-navigation-helper'
import { createAppContainer } from 'react-navigation'

export const mainTabConfigs = {
    Home: {
      route: {
        screen: Home,
        navigationOptions: {
          header: null,
          tabBarIcon: generateTabIcon('行情', require('./icon/market.png'))
        }
      }
    },
    Order: {
      route: {
        screen: Order,
        navigationOptions: {
          header: null,
          tabBarIcon: generateTabIcon('币币', require('./icon/exchange.png'))
        }
      }
    },
    Mine: {
      route: {
        screen: Mine,
        navigationOptions: {
          header: null,
          tabBarIcon: generateTabIcon('我的', require('./icon/account.png'))
        }
      }
    }
  }
  
  export default ()=>{
        return parseRouterConfigs(mainTabConfigs), {
          tabBarPosition: 'bottom',
          swipeEnabled: false,
          animationEnabled: false,
          tabBarOptions: {
            showLabel: false,
            style: {
              backgroundColor: '#fff',
              borderTopWidth: StyleSheet.hairlineWidth,
              borderTopColor: '#e7e7e7'
            }
          }
        }
  }
  
  function generateTabIcon (text, icon) {
    return props => <TabIcon {...props} text={text} icon={icon} />
  }